import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Реквизиты — МАКСФЛОК",
  description: "Реквизиты ООО НПО «Принцепс» — ИНН, ОГРН, банковские реквизиты.",
}

const requisites = [
  {
    title: "Основные сведения",
    rows: [
      { label: "Полное наименование", value: "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ НАУЧНО-ПРОИЗВОДСТВЕННОЕ ОБЪЕДИНЕНИЕ «ПРИНЦЕПС»" },
      { label: "Краткое наименование", value: "ООО НПО «Принцепс»" },
      { label: "ИНН", value: "7455024270" },
      { label: "КПП", value: "745501001" },
      { label: "ОГРН", value: "1157456024076" },
      { label: "ОКПО", value: "72669737" },
    ],
  },
  {
    title: "Адреса",
    rows: [
      { label: "Юридический адрес", value: "455013, г. Магнитогорск, ул. Интернациональная, д. 1, корп. А" },
      { label: "Фактический адрес", value: "455037, г. Магнитогорск, пр. Карла Маркса, д. 115, корп. 5, оф. 78" },
      { label: "Почтовый адрес", value: "455037, г. Магнитогорск, а/я 1969" },
    ],
  },
  {
    title: "Банковские реквизиты",
    rows: [
      { label: "Банк", value: 'ООО "Банк Точка"' },
      { label: "БИК", value: "044525104" },
      { label: "Расчётный счёт", value: "40702810520000146977" },
      { label: "Корреспондентский счёт", value: "30101810745374525104" },
    ],
  },
]

export default function RequisitesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 py-10">
          <BreadcrumbNav items={[{ label: "Реквизиты" }]} />

          <div className="mt-8 mb-10">
            <h1 className="text-3xl font-bold tracking-tight">Реквизиты организации</h1>
            <p className="mt-2 text-muted-foreground">ООО НПО «Принцепс» — производитель МАКСФЛОК</p>
          </div>

          <div className="flex flex-col gap-6">
            {requisites.map((section) => (
              <div key={section.title} className="overflow-hidden rounded-xl border bg-card">
                <div className="border-b bg-muted/40 px-5 py-3">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {section.title}
                  </h2>
                </div>
                <div className="divide-y">
                  {section.rows.map((row) => (
                    <div key={row.label} className="flex flex-col gap-0.5 px-5 py-3 sm:flex-row sm:items-baseline sm:gap-4">
                      <span className="w-full shrink-0 text-sm text-muted-foreground sm:w-48">{row.label}</span>
                      <span className="text-sm font-medium">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
