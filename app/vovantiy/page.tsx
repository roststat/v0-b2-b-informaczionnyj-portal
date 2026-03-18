import type { Metadata } from "next";
import Image from "next/image";
import { Monitor, GraduationCap, Code2, BookOpen, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";

export const metadata: Metadata = {
  title: "Вовантий — Учитель Информатики",
  description: "Вовантий — учитель информатики. Программирование, алгоритмы, цифровые технологии.",
};

export default function VovantiyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 pb-16">
        <BreadcrumbNav items={[{ label: "Вовантий" }]} />

        {/* Hero */}
        <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
          <div className="shrink-0">
            <div className="relative h-64 w-64 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/vovantiy.jpg"
                alt="Вовантий — учитель информатики"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Monitor className="h-3.5 w-3.5" />
              Учитель Информатики
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
              Вовантий
            </h1>
            <p className="mb-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Специалист в области информационных технологий и программирования.
              Помогает освоить компьютерные науки, научиться мыслить алгоритмически
              и создавать собственные цифровые решения.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Python", "Алгоритмы", "Базы данных", "Web-разработка", "ОГЭ/ЕГЭ"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Направления */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">Чему учит</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Code2 className="h-5 w-5" />,
                title: "Программирование",
                description: "Python, основы алгоритмизации, написание программ с нуля.",
              },
              {
                icon: <Monitor className="h-5 w-5" />,
                title: "Компьютерные науки",
                description: "Устройство ПК, операционные системы, работа с данными.",
              },
              {
                icon: <BookOpen className="h-5 w-5" />,
                title: "Подготовка к экзаменам",
                description: "ОГЭ и ЕГЭ по информатике: теория, практика, разбор заданий.",
              },
              {
                icon: <Lightbulb className="h-5 w-5" />,
                title: "Проектная работа",
                description: "Создание реальных проектов: сайты, игры, приложения.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-border/60 transition-shadow hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* О подходе */}
        <section className="rounded-xl bg-muted/60 p-8">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight">Подход к обучению</h2>
          </div>
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            Обучение строится на практике: никакой скучной теории без применения.
            Каждая тема закрепляется реальными задачами. Вовантий объясняет сложные
            вещи простым языком и помогает ученикам не просто запомнить, а по-настоящему понять.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
