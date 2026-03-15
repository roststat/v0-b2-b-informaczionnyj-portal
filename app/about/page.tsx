import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Award,
  Users,
  Clock,
  Check,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactButton } from "@/components/contact-button";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "О компании",
  description: `${company.name} — производитель профессионального дезинфицирующего средства МАКСФЛОК. Опыт, сертификаты, команда экспертов.`,
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 pb-16">
        <BreadcrumbNav items={[{ label: "О компании" }]} />

        <h1 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
          О компании
        </h1>
        <p className="mb-12 max-w-3xl text-lg text-muted-foreground">
          {company.name} — разработчик и производитель профессиональных
          дезинфицирующих и дезодорирующих средств для государственных объектов и
          предприятий.
        </p>

        {/* Stats */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Clock className="h-5 w-5" />,
              value: "15+",
              label: "лет опыта в разработке",
            },
            {
              icon: <Shield className="h-5 w-5" />,
              value: "500+",
              label: "видов патогенов",
            },
            {
              icon: <Building2 className="h-5 w-5" />,
              value: "8+",
              label: "отраслей применения",
            },
            {
              icon: <Users className="h-5 w-5" />,
              value: "50+",
              label: "гос. учреждений",
            },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="flex items-center gap-4 pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">
            История и миссия
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
              <p>
                {company.name} основана группой специалистов в области
                дезинфекции и санитарной гигиены. На протяжении более 15 лет
                компания занимается разработкой и производством профессиональных
                средств для обеспечения санитарно-эпидемиологической
                безопасности.
              </p>
              <p>
                Наша миссия — предоставить государственным учреждениям,
                предприятиям и ведомствам надёжное, безопасное и экономичное
                решение для профилактической и вынужденной дезинфекции, а также
                устранения неприятных запахов.
              </p>
              <p>
                МАКСФЛОК был разработан как универсальное средство,
                объединяющее дезинфицирующие и дезодорирующие свойства в одном
                продукте. Это позволяет нашим клиентам значительно упростить
                процессы санитарной обработки и снизить затраты.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Наши ценности</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Научный подход и доказательная база",
                      "Безопасность людей и окружающей среды",
                      "Экономическая эффективность решений",
                      "Профессиональная техническая поддержка",
                      "Прозрачность и честность",
                    ].map((value) => (
                      <li
                        key={value}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {value}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section id="certificates" className="mb-16">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">
            Сертификаты и одобрения
          </h2>
          <p className="mb-6 max-w-3xl text-muted-foreground">
            МАКСФЛОК прошёл все необходимые испытания и имеет полный пакет
            разрешительной документации для использования на территории России.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Shield className="h-5 w-5" />,
                title: "Свидетельство о государственной регистрации",
                description:
                  "Зарегистрировано в установленном порядке как дезинфицирующее средство.",
              },
              {
                icon: <Award className="h-5 w-5" />,
                title: "Одобрение МЧС России",
                description:
                  "Одобрено для использования при ликвидации ЧС и инфекционных очагов.",
              },
              {
                icon: <Award className="h-5 w-5" />,
                title: "Заключение Роспотребнадзора",
                description:
                  "Санитарно-эпидемиологическое заключение о безопасности применения.",
              },
              {
                icon: <Shield className="h-5 w-5" />,
                title: "Сертификат соответствия",
                description:
                  "Подтверждение соответствия ГОСТ и ТР ЕАЭС.",
              },
              {
                icon: <Award className="h-5 w-5" />,
                title: "Протоколы испытаний",
                description:
                  "Микробиологические испытания подтверждают эффективность против 500+ патогенов.",
              },
              {
                icon: <Shield className="h-5 w-5" />,
                title: "Ведомственные допуски",
                description:
                  "Допущено к применению в ЛПУ, пищевой промышленности, ветеринарии.",
              },
            ].map((cert) => (
              <Card key={cert.title}>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {cert.icon}
                  </div>
                  <CardTitle className="text-base">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact info */}
        <section className="rounded-xl bg-muted/60 p-8">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">
            Контактная информация
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-4 text-muted-foreground">
                Для получения коммерческого предложения, консультации или
                документации свяжитесь с нами любым удобным способом.
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <p>
                  <span className="font-medium">Адрес:</span>{" "}
                  {company.address}
                </p>
                <p>
                  <span className="font-medium">Телефон:</span>{" "}
                  <a
                    href={company.phoneHref}
                    className="text-primary hover:underline"
                  >
                    {company.phone}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href={`mailto:${company.email}`}
                    className="text-primary hover:underline"
                  >
                    {company.email}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-end justify-start sm:justify-end">
              <ContactButton size="lg" label="Связаться с нами" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
