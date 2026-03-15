import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ContactButton } from "@/components/contact-button"
import { MapPin, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "ВКУСНЫЙ НООС — зоогигиенические средства для животных",
  description: "Зоогигиенические средства для нейтрализации запахов мочи, кала и других выделений кошек и собак.",
}

const products = [
  {
    id: "cats",
    emoji: "🐱",
    name: "ВКУСНЫЙ НООС для кошек",
    image: "/noos-cats.png",
    description:
      "Зоогигиеническое средство для нейтрализации и полного разложения запахов мочи, кала и других выделений кошек и других домашних животных. Работает на любых поверхностях в быту и местах содержания животных (лотки, клетки, переноски). Эффективно устраняет запахи с ковров, полов, мебели, матрасов, текстиля, опилок, наполнителей лотков, пластика. Действует на молекулярном уровне, обеззараживает и обеспечивает длительный эффект свежести.",
  },
  {
    id: "dogs",
    emoji: "🐶",
    name: "ВКУСНЫЙ НООС для собак",
    image: "/noos-dogs.png",
    description:
      "Зоогигиеническое средство для нейтрализации и полного разложения запахов мочи, кала и других выделений собак и других домашних животных. Работает на любых поверхностях в быту и местах содержания животных (лотки, клетки, переноски). Эффективно устраняет запахи с ковров, полов, мебели, матрасов, текстиля, опилок, наполнителей лотков, пластика. Действует на молекулярном уровне, обеззараживает и обеспечивает длительный эффект свежести.",
  },
]

const packaging = [
  { label: "Объём флакона", value: "500 мл, 1 литр" },
  { label: "Размеры коробки", value: "190 × 80 × 80 мм" },
  { label: "Вес коробки с термоплёнкой", value: "~0,1–0,15 кг" },
  { label: "Общий вес с товаром", value: "~0,65–0,75 кг" },
]

export default function VkusnyNoosPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <BreadcrumbNav
            items={[
              { label: "Проекты", href: "/projects" },
              { label: "ВКУСНЫЙ НООС" },
            ]}
          />

          {/* Баннер проекта */}
          <div className="relative mt-8 mb-10 overflow-hidden rounded-2xl" style={{background: "linear-gradient(135deg, #5bbfb5 0%, #3da89e 40%, #c8a882 100%)"}}>
            <div className="flex flex-col items-start justify-center gap-4 px-8 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-12 sm:py-12">
              {/* Текст */}
              <div className="z-10 flex flex-col gap-2">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                  спрей зоогигиенический
                </span>
                <div className="mt-1">
                  <span
                    className="block text-lg font-black leading-none text-[#e8334a] drop-shadow"
                    style={{fontStyle: "italic", letterSpacing: "-0.02em"}}
                  >
                    ВКУСНЫЙ
                  </span>
                  <span
                    className="block text-6xl font-black leading-none text-white drop-shadow-lg sm:text-8xl"
                    style={{letterSpacing: "-0.03em"}}
                  >
                    НООС
                  </span>
                </div>
                <p className="mt-2 max-w-xs text-sm font-semibold uppercase tracking-wider text-white/90">
                  Нейтрализатор запаха
                </p>
                <p className="text-xs text-white/70">с уважением к вашему питомцу</p>
              </div>

              {/* Фото продуктов */}
              <div className="flex items-end gap-4 sm:gap-6">
                <img
                  src="/noos-cats.png"
                  alt="ВКУСНЫЙ НООС для кошек"
                  className="h-44 w-auto drop-shadow-xl sm:h-56"
                  style={{transform: "rotate(-4deg)"}}
                />
                <img
                  src="/noos-dogs.png"
                  alt="ВКУСНЫЙ НООС для собак"
                  className="h-48 w-auto drop-shadow-xl sm:h-64"
                  style={{transform: "rotate(3deg)"}}
                />
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight">ВКУСНЫЙ НООС</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">
              Зоогигиенические средства для нейтрализации запахов для кошек и собак.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                Магнитогорск, ул. Интернациональная, 1а
              </span>
              <a
                href="https://vkusniynoos.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Globe className="h-4 w-4 text-primary" />
                vkusniynoos.ru
              </a>
            </div>
          </div>

          {/* Карточки продуктов */}
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <div key={product.id} className="overflow-hidden rounded-xl border bg-card">
                {/* Место для фото */}
                <div className="relative h-56 w-full overflow-hidden bg-muted">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                      <span className="text-5xl">{product.emoji}</span>
                      <span className="text-sm text-muted-foreground">Фото будет добавлено</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground/70 italic">
                    Не подлежит обязательной сертификации. Не является лекарственным средством или ветпрепаратом. Для животных.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Упаковка */}
          <div className="mt-10 rounded-xl border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">Упаковка</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {packaging.map((item) => (
                <div key={item.label} className="rounded-lg bg-muted/50 px-4 py-3">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="mt-1 text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 rounded-xl border bg-card p-6 text-center">
            <h2 className="mb-2 text-lg font-semibold">Хотите узнать больше?</h2>
            <p className="mb-5 text-sm text-muted-foreground">
              Оставьте номер — мы перезвоним и расскажем подробнее о продуктах.
            </p>
            <ContactButton label="Перезвоните мне" />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
