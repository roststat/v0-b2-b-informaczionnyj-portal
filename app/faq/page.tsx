import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { ContactButton } from "@/components/contact-button";
import { faqData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Часто задаваемые вопросы",
  description:
    "Ответы на вопросы о МАКСФЛОКЕ: применение, безопасность, концентрации, режимы, хранение, государственные закупки.",
};

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 pb-16">
        <BreadcrumbNav items={[{ label: "FAQ" }]} />

        <h1 className="mb-3 text-3xl font-bold tracking-tight lg:text-4xl">
          Часто задаваемые вопросы
        </h1>
        <p className="mb-10 max-w-3xl text-lg text-muted-foreground">
          Ответы на наиболее частые вопросы о МАКСФЛОКЕ, его применении,
          безопасности и условиях закупки.
        </p>

        {faqData.map((category) => (
          <section key={category.category} className="mb-10">
            <h2 className="mb-4 text-xl font-bold tracking-tight">
              {category.category}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((item, idx) => (
                <AccordionItem
                  key={item.question}
                  value={`${category.category}-${idx}`}
                >
                  <AccordionTrigger className="text-left text-sm font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}

        <div className="rounded-xl bg-muted/60 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold">
            Не нашли ответ на свой вопрос?
          </h3>
          <p className="mb-4 text-muted-foreground">
            Наши специалисты готовы ответить на любые вопросы о МАКСФЛОКЕ.
          </p>
          <ContactButton label="Задать вопрос" />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
