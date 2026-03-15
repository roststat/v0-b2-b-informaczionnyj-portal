import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { company } from "@/lib/data"

export const metadata: Metadata = {
  title: "Политика использования Cookie — МАКСФЛОК",
  description: "Политика использования файлов cookie на сайте МАКСФЛОК.",
}

export default function CookiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 py-10">
          <BreadcrumbNav items={[{ label: "Политика Cookie" }]} />

          <div className="mt-8 mb-10">
            <h1 className="text-3xl font-bold tracking-tight">Политика использования Cookie</h1>
            <p className="mt-2 text-sm text-muted-foreground">Последнее обновление: март 2026 г.</p>
          </div>

          <div className="flex flex-col gap-8 text-sm leading-relaxed text-foreground">

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">Что такое Cookie</h2>
              <p>Cookie — это небольшие текстовые файлы, которые сохраняются в вашем браузере при посещении сайта. Они помогают сайту запомнить ваши настройки и улучшить работу сервиса.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">Какие Cookie мы используем</h2>
              <div className="overflow-hidden rounded-lg border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Тип</th>
                      <th className="px-4 py-3 text-left font-semibold">Назначение</th>
                      <th className="px-4 py-3 text-left font-semibold">Срок хранения</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-3 font-medium">Технические</td>
                      <td className="px-4 py-3 text-muted-foreground">Обеспечивают работу сайта (тема, сессия)</td>
                      <td className="px-4 py-3 text-muted-foreground">Сессия / 1 год</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Аналитические</td>
                      <td className="px-4 py-3 text-muted-foreground">Анализ посещаемости и поведения пользователей</td>
                      <td className="px-4 py-3 text-muted-foreground">До 2 лет</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">Управление Cookie</h2>
              <p>Вы можете отключить или удалить файлы cookie в настройках вашего браузера:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1">
                <li><strong>Chrome:</strong> Настройки → Конфиденциальность → Файлы cookie</li>
                <li><strong>Firefox:</strong> Настройки → Приватность и защита</li>
                <li><strong>Safari:</strong> Настройки → Конфиденциальность</li>
                <li><strong>Edge:</strong> Настройки → Файлы cookie и разрешения сайтов</li>
              </ul>
              <p className="text-muted-foreground">Отключение cookie может повлиять на корректность работы некоторых функций сайта.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">Контакты</h2>
              <p>По вопросам использования cookie обращайтесь: <a href={`mailto:${company.email}`} className="text-primary underline underline-offset-2">{company.email}</a></p>
            </section>

          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
