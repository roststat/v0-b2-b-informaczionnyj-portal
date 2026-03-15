import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ContactButton } from "@/components/contact-button"
import { industries } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Применение МАКСФЛОК — отрасли",
  description: "МАКСФЛОК применяется в ЖКХ, птицеводстве, здравоохранении, пищевой промышленности и других отраслях.",
}

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <BreadcrumbNav items={[{ label: "Применение" }]} />

          <div className="mt-8 mb-10">
            <h1 className="text-3xl font-bold tracking-tight">Области применения</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              МАКСФЛОК применяется в 8+ отраслях для профилактической и вынужденной дезинфекции
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <Card className="h-full border-border/60 transition-all group-hover:border-primary/30 group-hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-base">
                      {item.title}
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-xl border bg-card p-6 text-center">
            <h2 className="mb-2 text-lg font-semibold">Не нашли свою отрасль?</h2>
            <p className="mb-5 text-sm text-muted-foreground">
              Оставьте номер — специалист подберёт решение для вашего объекта.
            </p>
            <ContactButton label="Перезвоните мне" />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
