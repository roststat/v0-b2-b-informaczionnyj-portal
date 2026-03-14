"use client"

import { useState, useTransition } from "react"
import { format } from "date-fns"
import { ru } from "date-fns/locale"
import {
  CheckCircle2,
  Circle,
  Phone,
  Trash2,
  Copy,
  Check,
  Search,
  Filter,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toggleLeadStatusAction, deleteLeadAction } from "@/app/actions/leads"
import type { Lead } from "@/lib/leads"

const sourceLabels: Record<string, string> = {
  contact_modal: "Форма на сайте",
  contact_page: "Страница контактов",
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)
  function handleCopy() {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={handleCopy}
      className="ml-1.5 inline-flex h-5 w-5 items-center justify-center rounded text-muted-foreground/50 hover:text-muted-foreground transition-colors"
      title="Скопировать номер"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  )
}

function LeadRow({ lead, onToggle, onDelete }: {
  lead: Lead
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}) {
  const [togglePending, startToggle] = useTransition()
  const [deletePending, startDelete] = useTransition()

  return (
    <tr
      className={`border-b transition-colors ${
        lead.status === "processed"
          ? "bg-muted/20 text-muted-foreground"
          : "hover:bg-muted/40"
      }`}
    >
      {/* Статус */}
      <td className="px-4 py-3 w-12">
        <div className="flex items-center gap-1.5" title={lead.status === "processed" ? "Обработана" : "Новая"}>
          {lead.status === "processed" ? (
            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
          ) : (
            <Circle className="h-4 w-4 text-amber-500 shrink-0" />
          )}
        </div>
      </td>

      {/* Имя */}
      <td className="px-4 py-3 text-sm font-medium">
        <span className={lead.status === "processed" ? "line-through decoration-muted-foreground/30" : ""}>
          {lead.name}
        </span>
      </td>

      {/* Телефон */}
      <td className="px-4 py-3 text-sm">
        <div className="flex items-center">
          <a
            href={`tel:${lead.phone.replace(/\D/g, "").replace(/^8/, "+7")}`}
            className="hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            <Phone className="h-3.5 w-3.5 text-muted-foreground" />
            {lead.phone}
          </a>
          <CopyButton value={lead.phone} />
        </div>
      </td>

      {/* Дата */}
      <td className="px-4 py-3 text-sm text-muted-foreground whitespace-nowrap">
        <div>{format(new Date(lead.createdAt), "d MMM yyyy", { locale: ru })}</div>
        <div className="text-xs opacity-70">
          {format(new Date(lead.createdAt), "HH:mm")}
        </div>
      </td>

      {/* Источник */}
      <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">
        <Badge variant="secondary" className="font-normal text-xs">
          {sourceLabels[lead.source] ?? lead.source}
        </Badge>
      </td>

      {/* Обработана */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          <Switch
            checked={lead.status === "processed"}
            disabled={togglePending}
            onCheckedChange={() => {
              startToggle(async () => {
                onToggle(lead.id)
                await toggleLeadStatusAction(lead.id)
              })
            }}
            aria-label="Отметить как обработанную"
          />
          <span className="text-xs text-muted-foreground hidden sm:inline">
            {lead.status === "processed" ? "Обработана" : "Новая"}
          </span>
        </div>
      </td>

      {/* Удалить */}
      <td className="px-4 py-3">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-muted-foreground hover:text-destructive"
              disabled={deletePending}
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Удалить заявку?</AlertDialogTitle>
              <AlertDialogDescription>
                Заявка от <strong>{lead.name}</strong> ({lead.phone}) будет
                удалена безвозвратно.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Отмена</AlertDialogCancel>
              <AlertDialogAction
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                onClick={() => {
                  startDelete(async () => {
                    onDelete(lead.id)
                    await deleteLeadAction(lead.id)
                  })
                }}
              >
                Удалить
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </td>
    </tr>
  )
}

export function LeadsTable({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState(initialLeads)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<"all" | "new" | "processed">("all")

  function handleToggle(id: string) {
    setLeads((prev) =>
      prev.map((l) =>
        l.id === id
          ? {
              ...l,
              status: l.status === "new" ? "processed" : "new",
              processedAt: l.status === "new" ? new Date().toISOString() : null,
            }
          : l
      )
    )
  }

  function handleDelete(id: string) {
    setLeads((prev) => prev.filter((l) => l.id !== id))
  }

  const filtered = leads.filter((l) => {
    const matchesSearch =
      search === "" ||
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.phone.includes(search)
    const matchesFilter =
      filter === "all" ||
      (filter === "new" && l.status === "new") ||
      (filter === "processed" && l.status === "processed")
    return matchesSearch && matchesFilter
  })

  const newCount = leads.filter((l) => l.status === "new").length

  return (
    <div className="flex flex-col gap-4">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Поиск по имени или телефону..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground shrink-0" />
          <Select value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все заявки ({leads.length})</SelectItem>
              <SelectItem value="new">
                Новые ({newCount})
              </SelectItem>
              <SelectItem value="processed">
                Обработанные ({leads.length - newCount})
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center text-muted-foreground rounded-lg border border-dashed">
          <Circle className="mb-3 h-10 w-10 opacity-30" />
          <p className="text-sm font-medium">Заявок не найдено</p>
          <p className="text-xs mt-1 opacity-70">
            {search || filter !== "all"
              ? "Попробуйте изменить фильтр или поисковый запрос"
              : "Первые заявки появятся здесь после отправки формы"}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-muted/60 border-b">
                <th className="px-4 py-2.5 text-xs font-semibold text-muted-foreground w-10"></th>
                <th className="px-4 py-2.5 text-xs font-semibold text-muted-foreground">Имя</th>
                <th className="px-4 py-2.5 text-xs font-semibold text-muted-foreground">Телефон</th>
                <th className="px-4 py-2.5 text-xs font-semibold text-muted-foreground">Дата</th>
                <th className="px-4 py-2.5 text-xs font-semibold text-muted-foreground hidden md:table-cell">Источник</th>
                <th className="px-4 py-2.5 text-xs font-semibold text-muted-foreground">Статус</th>
                <th className="px-4 py-2.5 text-xs font-semibold text-muted-foreground w-10"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => (
                <LeadRow
                  key={lead.id}
                  lead={lead}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="text-xs text-muted-foreground text-right">
        Показано {filtered.length} из {leads.length} заявок
      </p>
    </div>
  )
}
