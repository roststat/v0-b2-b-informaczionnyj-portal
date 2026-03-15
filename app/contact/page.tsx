import type { Metadata } from "next"
import { Phone, Mail, MapPin } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ContactButton } from "@/components/contact-button"
import { company } from "@/lib/data"

export const metadata: Metadata = {
  title: "Контакты — МАКСФЛОК",
  description: "Свяжитесь с нами по телефону, email или оставьте заявку на обратный звонок.",
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <BreadcrumbNav
            items={[{ label: "Контакты" }]}
          />

          <div className="mt-8 mb-12">
            <h1 className="text-3xl font-bold tracking-tight">Контакты</h1>
            <p className="mt-2 text-muted-foreground">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Контактная информация */}
            <div className="flex flex-col gap-6">
              <div className="rounded-xl border bg-card p-6">
                <h2 className="mb-6 text-lg font-semibold">Реквизиты</h2>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Адрес</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{company.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Телефон</p>
                      <a
                        href={company.phoneHref}
                        className="mt-0.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {company.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a
                        href={`mailto:${company.email}`}
                        className="mt-0.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-card p-6">
                <h2 className="mb-2 text-lg font-semibold">Полное наименование</h2>
                <p className="text-sm text-muted-foreground">{company.name}</p>
              </div>
            </div>

            {/* Форма обратной связи */}
            <div className="rounded-xl border bg-card p-6">
              <h2 className="mb-2 text-lg font-semibold">Обратный звонок</h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Оставьте имя и номер телефона — мы перезвоним в рабочее время.
              </p>
              <ContactButton size="lg" label="Оставить заявку" className="w-full" />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
