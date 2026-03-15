import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { ContactButton } from "@/components/contact-button";
import { cases } from "@/lib/data";

export const metadata: Metadata = {
  title: "Кейсы и результаты",
  description:
    "Реальные примеры успешного применения МАКСФЛОКА в различных отраслях: птицеводство, ЖКХ, здравоохранение.",
};

export default function CasesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 pb-16">
        <BreadcrumbNav items={[{ label: "Кейсы и результаты" }]} />

        <h1 className="mb-3 text-3xl font-bold tracking-tight lg:text-4xl">
          Кейсы и результаты
        </h1>
        <p className="mb-10 max-w-3xl text-lg text-muted-foreground">
          Реальные примеры успешного применения МАКСФЛОКА на предприятиях
          различных отраслей.
        </p>

        <div className="grid gap-6 lg:grid-cols-1">
          {cases.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="grid md:grid-cols-[2fr_1fr]">
                <div>
                  <CardHeader>
                    <div className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
                      {item.industry}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </div>
                <div className="flex flex-col justify-center border-t bg-muted/30 p-6 md:border-l md:border-t-0">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Результаты
                  </p>
                  <ul className="flex flex-col gap-2">
                    {item.results.map((result) => (
                      <li
                        key={result}
                        className="flex items-center gap-2 text-sm font-medium"
                      >
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-muted/60 p-8 text-center">
          <h2 className="mb-2 text-xl font-bold">
            Хотите аналогичные результаты?
          </h2>
          <p className="mb-4 text-muted-foreground">
            Свяжитесь с нами для подбора оптимального решения для вашего
            предприятия.
          </p>
          <ContactButton size="lg" label="Запросить консультацию" />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
