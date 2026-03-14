import { readLeads } from "@/lib/leads"
import { LeadsTable } from "./leads-table"
import { isToday, isThisWeek } from "date-fns"
import {
  Inbox,
  CheckCircle2,
  Clock,
  TrendingUp,
} from "lucide-react"

export const metadata = {
  title: "Заявки | Панель управления МАКСФЛОК",
}

// Не кешируем — всегда актуальные данные
export const dynamic = "force-dynamic"

function StatCard({
  icon,
  label,
  value,
  sub,
  accent,
}: {
  icon: React.ReactNode
  label: string
  value: number
  sub?: string
  accent?: boolean
}) {
  return (
    <div
      className={`rounded-xl border p-5 flex flex-col gap-2 ${
        accent ? "border-primary/30 bg-primary/5" : "bg-card"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          {label}
        </span>
        <span className={`${accent ? "text-primary" : "text-muted-foreground"}`}>
          {icon}
        </span>
      </div>
      <div className="flex items-end gap-2">
        <span className={`text-3xl font-bold ${accent ? "text-primary" : ""}`}>
          {value}
        </span>
        {sub && <span className="text-xs text-muted-foreground mb-1">{sub}</span>}
      </div>
    </div>
  )
}

export default function AdminPage() {
  const leads = readLeads()

  const totalLeads = leads.length
  const newLeads = leads.filter((l) => l.status === "new").length
  const todayLeads = leads.filter((l) => isToday(new Date(l.createdAt))).length
  const weekLeads = leads.filter((l) => isThisWeek(new Date(l.createdAt), { weekStartsOn: 1 })).length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card px-6 py-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Заявки</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Панель управления МАКСФЛОК
            </p>
          </div>
          <a
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Сайт
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8 flex flex-col gap-8">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            icon={<Inbox className="h-4 w-4" />}
            label="Всего заявок"
            value={totalLeads}
          />
          <StatCard
            icon={<CheckCircle2 className="h-4 w-4" />}
            label="Новых"
            value={newLeads}
            sub={newLeads > 0 ? "требуют обработки" : ""}
            accent={newLeads > 0}
          />
          <StatCard
            icon={<Clock className="h-4 w-4" />}
            label="Сегодня"
            value={todayLeads}
          />
          <StatCard
            icon={<TrendingUp className="h-4 w-4" />}
            label="За неделю"
            value={weekLeads}
          />
        </div>

        {/* Table */}
        <section>
          <div className="mb-4">
            <h2 className="text-base font-semibold">Все заявки</h2>
            <p className="text-sm text-muted-foreground">
              Переключите тумблер чтобы отметить заявку как обработанную
            </p>
          </div>
          <LeadsTable initialLeads={leads} />
        </section>
      </main>
    </div>
  )
}
