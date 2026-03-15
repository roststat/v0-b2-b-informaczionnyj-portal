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
                  {/* Превью проекта */}
                  <div
                    className="relative h-48 w-full overflow-hidden"
                    style={{background: "linear-gradient(135deg, #5bbfb5 0%, #3da89e 40%, #c8a882 100%)"}}
                  >
                    <div className="absolute inset-0 flex items-end justify-center gap-3 px-4 pb-0">
                      <img
                        src="/noos-cats.png"
                        alt="для кошек"
                        className="h-40 w-auto drop-shadow-lg transition-transform group-hover:scale-105"
                        style={{transform: "rotate(-4deg)"}}
                      />
                      <img
                        src="/noos-dogs.png"
                        alt="для собак"
                        className="h-44 w-auto drop-shadow-lg transition-transform group-hover:scale-105"
                        style={{transform: "rotate(3deg)"}}
                      />
                    </div>
                    <div className="absolute left-3 top-3">
                      <span className="text-xs font-black italic text-[#e8334a] drop-shadow">ВКУСНЫЙ</span>
                      <span className="ml-1 text-lg font-black text-white drop-shadow">НООС</span>
                    </div>
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
