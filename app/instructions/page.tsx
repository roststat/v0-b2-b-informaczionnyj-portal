import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Calculator, FileText } from "lucide-react";
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
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { ContactButton } from "@/components/contact-button";
import { instructions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Инструкции по применению МАКСФЛОКА",
  description:
    "База данных инструкций по применению МАКСФЛОКА: пошаговые руководства, технические данные, режимы дезинфекции для всех отраслей.",
};

export default function InstructionsPage() {
  const applicationInstructions = instructions.filter(
    (i) => i.category === "application",
  );
  const technicalInstructions = instructions.filter(
    (i) => i.category === "technical",
  );

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 pb-16">
        <BreadcrumbNav items={[{ label: "Инструкции" }]} />

        <div className="mb-10">
          <h1 className="mb-3 text-3xl font-bold tracking-tight lg:text-4xl">
            Инструкции по применению
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Полная база данных профессиональных инструкций, руководств и
            технической документации по применению МАКСФЛОКА в различных
            отраслях.
          </p>
        </div>

        {/* Quick tools */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/instructions/calculator" className="group">
            <Card className="h-full border-primary/20 bg-primary/5 transition-all group-hover:border-primary/40 group-hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Calculator className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">
                    Калькулятор дозировки
                  </CardTitle>
                  <CardDescription>
                    Рассчитать расход МАКСФЛОКА
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/faq" className="group">
            <Card className="h-full transition-all group-hover:border-primary/30 group-hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">FAQ</CardTitle>
                  <CardDescription>
                    Часто задаваемые вопросы
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
          <Link
            href="/instructions/specifications"
            className="group sm:col-span-2 lg:col-span-1"
          >
            <Card className="h-full transition-all group-hover:border-primary/30 group-hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">
                    Техническая документация
                  </CardTitle>
                  <CardDescription>
                    Характеристики и совместимость
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Application instructions */}
        <section id="application" className="mb-12">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">
            Инструкции по применению
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {applicationInstructions.map((item) => (
              <Link
                key={item.id}
                href={`/instructions/${item.slug}`}
                className="group"
              >
                <Card className="h-full transition-all group-hover:border-primary/30 group-hover:shadow-md">
                  <CardHeader>
                    <div className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
                      {item.industry}
                    </div>
                    <CardTitle className="text-base leading-snug">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3 leading-relaxed">
                      {item.description}
                    </CardDescription>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:underline">
                      Читать инструкцию
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Technical instructions */}
        <section id="technical" className="mb-12">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">
            Техническая документация
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {technicalInstructions.map((item) => (
              <Link
                key={item.id}
                href={`/instructions/${item.slug}`}
                className="group"
              >
                <Card className="h-full transition-all group-hover:border-primary/30 group-hover:shadow-md">
                  <CardHeader>
                    <div className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {item.industry}
                    </div>
                    <CardTitle className="text-base leading-snug">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3 leading-relaxed">
                      {item.description}
                    </CardDescription>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:underline">
                      Открыть документ
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-xl bg-muted/60 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold">Не нашли нужную инструкцию?</h3>
          <p className="mb-4 text-muted-foreground">
            Свяжитесь с нами, и наши специалисты подготовят рекомендации для
            вашего конкретного случая.
          </p>
          <ContactButton label="Запросить консультацию" />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
