import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ContactButton } from "@/components/contact-button"

export const metadata: Metadata = {
  title: "ВКУСНЫЙ НООС — натуральное питание для животных",
  description: "Линейка кормов и лакомств для кошек и собак на натуральных ингредиентах.",
}

const products = [
  {
    id: "cats",
    name: "ВКУСНЫЙ НООС для кошек",
    image: null, // фото будет добавлено
    description: "Описание продукта для кошек будет добавлено.",
    details: [],
  },
  {
    id: "dogs",
    name: "ВКУСНЫЙ НООС для собак",
    image: null, // фото будет добавлено
    description: "Описание продукта для собак будет добавлено.",
    details: [],
  },
]

export default function VkusnyNoosPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <BreadcrumbNav
            items={[
              { name: "Проекты", href: "/projects" },
              { name: "ВКУСНЫЙ НООС", href: "/projects/vkusny-noos" },
            ]}
          />

          {/* Шапка проекта */}
          <div className="mt-8 mb-12">
            {/* Место для баннера/фото проекта */}
            <div className="relative mb-8 h-56 w-full overflow-hidden rounded-2xl bg-muted sm:h-72">
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-5xl font-black text-muted-foreground/20 tracking-widest">
                  ВКУСНЫЙ НООС
                </span>
              </div>
              {/* Когда будет фото: замените div выше на <img src="..." className="h-full w-full object-cover" /> */}
            </div>

            <h1 className="text-3xl font-bold tracking-tight">ВКУСНЫЙ НООС</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">
              Натуральное питание для кошек и собак. Линейка кормов и лакомств на качественных ингредиентах.
            </p>
          </div>

          {/* Карточки продуктов */}
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <div key={product.id} className="overflow-hidden rounded-xl border bg-card">
                {/* Место для фото продукта */}
                <div className="relative h-56 w-full overflow-hidden bg-muted">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                      <span className="text-4xl">
                        {product.id === "cats" ? "🐱" : "🐶"}
                      </span>
                      <span className="text-sm text-muted-foreground">Фото будет добавлено</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  {product.details.length > 0 && (
                    <ul className="mt-4 flex flex-col gap-2">
                      {product.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl border bg-card p-6 text-center">
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
