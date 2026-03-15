import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/lib/data";

const footerLinks = [
  {
    title: "Компания",
    links: [
      { name: "О компании", href: "/about" },
      { name: "Сертификаты", href: "/about#certificates" },
      { name: "Кейсы", href: "/cases" },
      { name: "Блог", href: "/blog" },
    ],
  },
  {
    title: "Применение",
    links: [
      { name: "ЖКХ", href: "/products/municipal" },
      { name: "Птицеводство", href: "/products/poultry" },
      { name: "Здравоохранение", href: "/products/healthcare" },
      { name: "Пищевая промышленность", href: "/products/food-industry" },
    ],
  },
  {
    title: "Ресурсы",
    links: [
      { name: "Инструкции", href: "/instructions" },
      { name: "Калькулятор дозировки", href: "/instructions/calculator" },
      { name: "FAQ", href: "/faq" },
      { name: "Контакты", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
                <span className="text-base font-bold text-sidebar-primary-foreground">
                  M
                </span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                МАКСФЛОК
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-sidebar-foreground/70">
              Универсальное дезинфицирующее и дезодорирующее средство для
              государственных объектов и предприятий. Одобрено МЧС и
              Роспотребнадзором.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sidebar-primary" />
                <span className="text-sidebar-foreground/80">
                  {company.address}
                </span>
              </div>
              <a
                href={company.phoneHref}
                className="flex items-center gap-2 text-sidebar-foreground/80 transition-colors hover:text-sidebar-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-sidebar-primary" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-sidebar-foreground/80 transition-colors hover:text-sidebar-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-sidebar-primary" />
                {company.email}
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sidebar-foreground/60">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-sidebar-foreground/70 transition-colors hover:text-sidebar-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-sidebar-border pt-8 sm:flex-row">
          <p className="text-xs text-sidebar-foreground/50">
            {"© "}
            {company.year} {company.name}. Все права защищены.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-sidebar-foreground/50">
            <Link href="/privacy" className="transition-colors hover:text-sidebar-primary">
              Политика конфиденциальности
            </Link>
            <Link href="/cookies" className="transition-colors hover:text-sidebar-primary">
              Политика Cookie
            </Link>
            <Link href="/requisites" className="transition-colors hover:text-sidebar-primary">
              Реквизиты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
