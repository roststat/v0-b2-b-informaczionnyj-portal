import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { ContactButton } from "@/components/contact-button";
import { instructions, company } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const instruction = instructions.find((i) => i.slug === slug);
  if (!instruction) return {};
  return {
    title: instruction.metaTitle,
    description: instruction.metaDescription,
  };
}

export function generateStaticParams() {
  return instructions.map((i) => ({ slug: i.slug }));
}

export default async function InstructionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const instruction = instructions.find((i) => i.slug === slug);
  if (!instruction) notFound();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 pb-16">
        <BreadcrumbNav
          items={[
            { label: "Инструкции", href: "/instructions" },
            { label: instruction.title },
          ]}
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          {/* Main content */}
          <article>
            <div className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
              {instruction.industry}
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight lg:text-4xl">
              {instruction.title}
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              {instruction.description}
            </p>

            {/* Table of contents */}
            <nav className="mb-8 rounded-lg border bg-muted/30 p-5">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Содержание
              </h2>
              <ol className="flex flex-col gap-1.5">
                {instruction.content.map((section, idx) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {idx + 1}. {section.title}
                    </a>
                  </li>
                ))}
                {instruction.faq.length > 0 && (
                  <li>
                    <a
                      href="#faq"
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {instruction.content.length + 1}. Часто задаваемые
                      вопросы
                    </a>
                  </li>
                )}
              </ol>
            </nav>

            {/* Sections */}
            {instruction.content.map((section) => (
              <section key={section.id} id={section.id} className="mb-8">
                <h2 className="mb-4 text-xl font-bold tracking-tight">
                  {section.title}
                </h2>
                <div className="prose-sm max-w-none">
                  {section.content.split("\n\n").map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="mb-3 leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.table && (
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-muted">
                          {section.table.headers.map((header) => (
                            <th
                              key={header}
                              className="px-4 py-2.5 text-left font-semibold text-foreground first:rounded-tl-lg last:rounded-tr-lg"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr
                            key={row.join("-")}
                            className="border-b border-border/50"
                          >
                            {row.map((cell, cellIdx) => (
                              <td
                                key={`${cell}-${cellIdx}`}
                                className="px-4 py-2.5 text-muted-foreground"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            {/* FAQ */}
            {instruction.faq.length > 0 && (
              <section id="faq" className="mb-8">
                <h2 className="mb-4 text-xl font-bold tracking-tight">
                  Часто задаваемые вопросы
                </h2>
                <div className="flex flex-col gap-4">
                  {instruction.faq.map((item) => (
                    <div
                      key={item.question}
                      className="rounded-lg border bg-card p-5"
                    >
                      <h3 className="mb-2 font-semibold text-foreground">
                        {item.question}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <div className="rounded-xl bg-primary/5 p-6">
              <h3 className="mb-2 text-lg font-bold">
                Есть вопросы по применению?
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Наши специалисты ответят в течение 24 часов. Телефон:{" "}
                {company.phone}
              </p>
              <ContactButton label="Запросить консультацию" />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">
                    Связанные материалы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    {instruction.relatedLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-4">
                <CardContent className="pt-5">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Контакты
                  </p>
                  <p className="mb-1 text-sm font-semibold">{company.phone}</p>
                  <p className="text-sm text-muted-foreground">
                    {company.email}
                  </p>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>

        {/* Back link */}
        <div className="mt-8 border-t pt-6">
          <Button variant="ghost" asChild>
            <Link href="/instructions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Все инструкции
            </Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
