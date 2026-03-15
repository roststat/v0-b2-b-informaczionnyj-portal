import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowRight, FileText, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ContactButton } from "@/components/contact-button"
import { company } from "@/lib/data"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const products: Record<string, {
  title: string
  description: string
  details: string[]
  instructionHref?: string
}> = {
  municipal: {
    title: "ЖКХ и коммунальное хозяйство",
    description: "МАКСФЛОК применяется для дезинфекции подъездов, лифтов, мусоропроводов, санузлов и сантехники в многоквартирных домах и управляющих компаниях.",
    details: [
      "Дезинфекция подъездов и лестничных клеток",
      "Обработка мусоропроводов и контейнерных площадок",
      "Санитарная обработка лифтов и кабин",
      "Дезодорация мест общего пользования",
      "Соответствие требованиям СанПиН",
    ],
    instructionHref: "/instructions/municipal-disinfection",
  },
  poultry: {
    title: "Птицеводство и животноводство",
    description: "Профилактическая и вынужденная дезинфекция птицефабрик, животноводческих комплексов. Одобрено для применения против АЧС, птичьего гриппа H5N1, ящура.",
    details: [
      "Профилактическая дезинфекция птичников и ферм",
      "Ликвидация очагов АЧС, птичьего гриппа, ящура",
      "Обработка дезбарьеров и транспорта",
      "Дезинфекция инкубаторов и оборудования",
      "Устранение запахов в помещениях",
    ],
    instructionHref: "/instructions/poultry-preventive",
  },
  healthcare: {
    title: "Здравоохранение и ЛПУ",
    description: "Дезинфекция палат, кабинетов, предстерилизационная очистка медицинских инструментов. Совмещённая ПСО и дезинфекция в одном этапе.",
    details: [
      "Дезинфекция палат и процедурных кабинетов",
      "Предстерилизационная очистка инструментов (ПСО)",
      "Обработка поверхностей против туберкулёза, ВИЧ, гепатитов",
      "Совмещённая ПСО + дезинфекция в одном этапе",
      "Поддержка при государственных закупках 44-ФЗ",
    ],
    instructionHref: "/instructions/healthcare-instruments",
  },
  "food-industry": {
    title: "Пищевая промышленность",
    description: "Санитарная обработка пищевых производств, столовых, кафе. Дезинфекция оборудования, холодильников, посуды и инвентаря без вреда для продуктов питания.",
    details: [
      "Дезинфекция разделочных поверхностей и столов",
      "Обработка холодильного оборудования",
      "Санитарная обработка посуды и инвентаря",
      "Дезинфекция полов, стен, вентиляции",
      "Безопасен для контакта с пищевыми продуктами после промывки",
    ],
    instructionHref: "/instructions/food-industry-disinfection",
  },
  "water-utilities": {
    title: "Водоканал и полигоны",
    description: "Обработка очистных сооружений, полигонов ТБО. Устранение запахов сероводорода, меркаптанов и аммиака на объектах водоканала.",
    details: [
      "Дезинфекция очистных сооружений",
      "Обработка полигонов ТБО и мусорных полей",
      "Устранение запахов сероводорода и меркаптанов",
      "Дезодорация насосных станций",
      "Экологически безопасен — биоразлагаем за 30 дней",
    ],
  },
  special: {
    title: "Специальные объекты",
    description: "Применение на объектах МЧС, пенитенциарных учреждениях, при ликвидации инфекционных очагов. Защита строительных материалов от биопоражений.",
    details: [
      "Дезинфекция в пенитенциарных учреждениях",
      "Ликвидация инфекционных очагов по предписанию Роспотребнадзора",
      "Защита строительных материалов от плесени и грибка",
      "Обработка объектов МЧС и силовых структур",
      "Работает при температурах от -45°С до +40°С",
    ],
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = products[slug]
  if (!product) return {}
  return {
    title: `${product.title} — МАКСФЛОК`,
    description: product.description,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products[slug]
  if (!product) notFound()

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <BreadcrumbNav
            items={[
              { name: "Применение", href: "/products" },
              { name: product.title, href: `/products/${slug}` },
            ]}
          />

          <div className="mt-8 mb-10">
            <h1 className="text-3xl font-bold tracking-tight">{product.title}</h1>
            <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Что обрабатываем */}
            <div className="rounded-xl border bg-card p-6">
              <h2 className="mb-4 text-lg font-semibold">Области применения</h2>
              <ul className="flex flex-col gap-3">
                {product.details.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Запрос */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl border bg-card p-6">
                <h2 className="mb-2 text-lg font-semibold">Запросить информацию</h2>
                <p className="mb-5 text-sm text-muted-foreground">
                  Оставьте номер — мы перезвоним, подберём режим обработки и пришлём примеры использования для вашего объекта.
                </p>
                <ContactButton size="lg" label="Перезвоните мне" className="w-full" />
              </div>

              <div className="rounded-xl border bg-card p-6">
                <h2 className="mb-2 text-lg font-semibold">Документация</h2>
                <div className="flex flex-col gap-3">
                  {product.instructionHref && (
                    <Button asChild variant="outline" className="justify-start gap-2">
                      <Link href={product.instructionHref}>
                        <FileText className="h-4 w-4" />
                        Инструкция по применению
                      </Link>
                    </Button>
                  )}
                  <Button asChild variant="outline" className="justify-start gap-2">
                    <Link href="/instructions/specifications">
                      <FileText className="h-4 w-4" />
                      Технические характеристики
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start gap-2">
                    <Link href="/instructions/calculator">
                      <FileText className="h-4 w-4" />
                      Калькулятор дозировки
                    </Link>
                  </Button>
                  <a
                    href={company.phoneHref}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mt-1"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    {company.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
