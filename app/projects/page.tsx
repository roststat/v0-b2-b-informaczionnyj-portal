import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Проекты",
  description: "Наши проекты и бренды",
}

const projects = [
  {
    slug: "vkusny-noos",
    name: "ВКУСНЫЙ НООС",
    tagline: "Зоогигиенические средства для животных",
    description: "Спреи-нейтрализаторы запахов мочи, кала и других выделений кошек и собак. Действуют на молекулярном уровне.",
    image: null, // фото будет добавлено позже
    productsCount: 2,
  },
]

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <BreadcrumbNav items={[{ label: "Проекты" }]} />

          <div className="mt-8 mb-10">
            <h1 className="text-3xl font-bold tracking-tight">Проекты</h1>
            <p className="mt-2 text-muted-foreground">
              Бренды и продуктовые линейки компании
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
                <div className="overflow-hidden rounded-xl border bg-card transition-all group-hover:border-primary/30 group-hover:shadow-md">
                  {/* Место для фото */}
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="text-4xl font-bold text-muted-foreground/20">
                          {project.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h2 className="text-lg font-bold tracking-tight">{project.name}</h2>
                    <p className="mt-1 text-sm font-medium text-primary">{project.tagline}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {project.productsCount} продукта
                      </span>
                      <span className="flex items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                        Подробнее <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
