import React from "react"
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Bird,
  Hospital,
  UtensilsCrossed,
  Droplets,
  Shield,
  Layers,
  Target,
  TrendingDown,
  Leaf,
  Headphones,
  Check,
  X,
  ChevronRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactButton } from "@/components/contact-button";
import {
  advantages,
  industries,
  spectrumData,
  comparisonData,
  cases,
  company,
} from "@/lib/data";

const industryIcons: Record<string, React.ReactNode> = {
  building: <Building2 className="h-6 w-6" />,
  bird: <Bird className="h-6 w-6" />,
  hospital: <Hospital className="h-6 w-6" />,
  utensils: <UtensilsCrossed className="h-6 w-6" />,
  droplets: <Droplets className="h-6 w-6" />,
  shield: <Shield className="h-6 w-6" />,
};

const advantageIcons: Record<string, React.ReactNode> = {
  layers: <Layers className="h-6 w-6" />,
  target: <Target className="h-6 w-6" />,
  "trending-down": <TrendingDown className="h-6 w-6" />,
  leaf: <Leaf className="h-6 w-6" />,
  headphones: <Headphones className="h-6 w-6" />,
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-sidebar py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sidebar-primary/10 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sidebar-border bg-sidebar-accent px-4 py-1.5 text-xs font-medium text-sidebar-foreground">
                <Shield className="h-3.5 w-3.5 text-sidebar-primary" />
                Одобрено МЧС и Роспотребнадзором
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-sidebar-foreground lg:text-5xl xl:text-6xl">
                {"МАКСФЛОК — универсальная дезинфекция и дезодорация"}
              </h1>
              <p className="mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-sidebar-foreground/70 lg:text-xl">
                Профессиональное дезинфицирующее и дезодорирующее средство для
                государственных объектов и предприятий. Эффективно против 500+
                видов патогенов.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  asChild
                  className="bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                >
                  <Link href="/contact">
                    Запросить информацию
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-sidebar-border bg-transparent text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
                >
                  <Link href="/instructions">Инструкции по применению</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight">
                Ключевые преимущества
              </h2>
              <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
                МАКСФЛОК объединяет дезинфекцию и дезодорацию в одном
                профессиональном средстве
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {advantages.map((item) => (
                <Card
                  key={item.title}
                  className="border-border/60 transition-shadow hover:shadow-md"
                >
                  <CardHeader className="pb-3">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {advantageIcons[item.icon]}
                    </div>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-muted/50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight">
                Области применения
              </h2>
              <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
                МАКСФЛОК применяется в 8+ отраслях для профилактической и
                вынужденной дезинфекции
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((item) => (
                <Link key={item.id} href={item.href} className="group">
                  <Card className="h-full border-border/60 transition-all group-hover:border-primary/30 group-hover:shadow-md">
                    <CardHeader>
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        {industryIcons[item.icon]}
                      </div>
                      <CardTitle className="flex items-center gap-2 text-base">
                        {item.title}
                        <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Spectrum table */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight">
                Спектр действия
              </h2>
              <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
                МАКСФЛОК эффективен против широкого спектра патогенных
                микроорганизмов
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="rounded-tl-lg px-6 py-3 text-left text-sm font-semibold text-foreground">
                      Категория
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                      Примеры
                    </th>
                    <th className="rounded-tr-lg px-6 py-3 text-left text-sm font-semibold text-foreground">
                      Статус
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {spectrumData.map((row, i) => (
                    <tr
                      key={row.category}
                      className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}
                    >
                      <td className="px-6 py-3 text-sm font-medium text-foreground">
                        {row.category}
                      </td>
                      <td className="px-6 py-3 text-sm text-muted-foreground">
                        {row.examples}
                      </td>
                      <td className="px-6 py-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          <Check className="h-3 w-3" />
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="bg-muted/50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight">
                Сравнение с аналогами
              </h2>
              <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
                МАКСФЛОК превосходит традиционные дезинфектанты по большинству
                параметров
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="rounded-tl-lg px-4 py-3 text-left text-sm font-semibold text-foreground">
                      Свойство
                    </th>
                    <th className="bg-primary/10 px-4 py-3 text-center text-sm font-semibold text-primary">
                      МАКСФЛОК
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                      Хлор
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                      Фенол
                    </th>
                    <th className="rounded-tr-lg px-4 py-3 text-center text-sm font-semibold text-foreground">
                      Альдегид
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr
                      key={row.property}
                      className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}
                    >
                      <td className="px-4 py-3 text-sm font-medium text-foreground">
                        {row.property}
                      </td>
                      <td className="bg-primary/5 px-4 py-3 text-center">
                        {row.maxflok ? (
                          <Check className="mx-auto h-5 w-5 text-primary" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-destructive/50" />
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.chlorine ? (
                          <Check className="mx-auto h-5 w-5 text-muted-foreground" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-destructive/50" />
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.phenol ? (
                          <Check className="mx-auto h-5 w-5 text-muted-foreground" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-destructive/50" />
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.aldehyde ? (
                          <Check className="mx-auto h-5 w-5 text-muted-foreground" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-destructive/50" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight">
                  Кейсы и результаты
                </h2>
                <p className="max-w-2xl text-pretty text-muted-foreground">
                  Реальные примеры успешного применения МАКСФЛОКА
                </p>
              </div>
              <Button variant="outline" asChild className="hidden sm:inline-flex bg-transparent">
                <Link href="/cases">
                  Все кейсы
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {cases.map((item) => (
                <Card
                  key={item.id}
                  className="border-border/60 transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <div className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
                      {item.industry}
                    </div>
                    <CardTitle className="text-base leading-snug">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {item.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center sm:hidden">
              <Button variant="outline" asChild>
                <Link href="/cases">
                  Все кейсы
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Government procurement CTA */}
        <section className="bg-primary py-16 text-primary-foreground lg:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
              <div className="max-w-2xl text-center lg:text-left">
                <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight">
                  Государственные закупки (44-ФЗ и 223-ФЗ)
                </h2>
                <p className="text-pretty text-primary-foreground/80">
                  Полное документационное сопровождение, подготовка коммерческих
                  предложений, техническое консультирование. Все необходимые
                  сертификаты и допуски.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Link href="/contact">
                    Запросить КП
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link href="/about#certificates">Сертификаты</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick links + Contact CTA */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-2xl font-bold tracking-tight">
                  Быстрые ссылки
                </h2>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      label: "Инструкции по применению",
                      href: "/instructions",
                    },
                    {
                      label: "Калькулятор дозировки",
                      href: "/instructions/calculator",
                    },
                    {
                      label: "Часто задаваемые вопросы",
                      href: "/faq",
                    },
                    { label: "Блог и статьи", href: "/blog" },
                    { label: "Контакты производителя", href: "/contact" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-center justify-between rounded-lg border bg-card px-5 py-4 transition-all hover:border-primary/30 hover:shadow-sm"
                    >
                      <span className="font-medium">{link.label}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-muted/60 p-8">
                <h2 className="mb-3 text-2xl font-bold tracking-tight">
                  Получить консультацию
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Свяжитесь с нами для получения коммерческого предложения,
                  технической консультации или подбора оптимального режима
                  обработки.
                </p>
                <div className="mb-6 flex flex-col gap-3">
                  <a
                    href={company.phoneHref}
                    className="flex items-center gap-3 text-lg font-semibold text-foreground"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    {company.phone}
                  </a>
                  <p className="text-sm text-muted-foreground">
                    {company.name}
                    <br />
                    {company.address}
                  </p>
                </div>
                <ContactButton className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
