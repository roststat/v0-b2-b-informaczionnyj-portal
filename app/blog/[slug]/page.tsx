import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { ContactButton } from "@/components/contact-button";
import { blogPosts, company } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 pb-16">
        <BreadcrumbNav
          items={[
            { label: "Блог", href: "/blog" },
            { label: post.title },
          ]}
        />

        <article>
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              {new Date(post.date).toLocaleDateString("ru-RU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight lg:text-4xl">
            {post.title}
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>

          <div className="prose-sm flex max-w-none flex-col gap-4 leading-relaxed text-muted-foreground">
            <p>
              Данная статья находится в процессе подготовки. Полный текст будет
              опубликован в ближайшее время. Для получения актуальной информации
              по теме обратитесь к нашим специалистам.
            </p>
            <p>
              МАКСФЛОК — универсальное дезинфицирующее и дезодорирующее
              средство, применяемое в государственных учреждениях, на
              предприятиях и в ведомствах. Эффективен против более 500 видов
              патогенов.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 rounded-xl bg-primary/5 p-6">
            <h3 className="mb-2 text-lg font-bold">
              Хотите узнать больше?
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Свяжитесь с нами для консультации. Телефон: {company.phone}
            </p>
            <ContactButton label="Связаться с нами" />
          </div>
        </article>

        <div className="mt-8 border-t pt-6">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Все статьи
            </Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
