import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { company } from "@/lib/data"

export const metadata: Metadata = {
  title: "Политика конфиденциальности — МАКСФЛОК",
  description: "Политика конфиденциальности и обработки персональных данных ООО НПО «Принцепс».",
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 py-10">
          <BreadcrumbNav items={[{ label: "Политика конфиденциальности" }]} />

          <div className="mt-8 mb-10">
            <h1 className="text-3xl font-bold tracking-tight">Политика конфиденциальности</h1>
            <p className="mt-2 text-sm text-muted-foreground">Последнее обновление: март 2026 г.</p>
          </div>

          <div className="prose prose-sm max-w-none flex flex-col gap-8 text-sm leading-relaxed text-foreground">

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">1. Общие положения</h2>
              <p>Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты персональных данных пользователей сайта, осуществляемой Обществом с ограниченной ответственностью Научно-производственным объединением «Принцепс» (далее — «Оператор»).</p>
              <p>Оператор обрабатывает персональные данные в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
              <p>Использование сайта означает безоговорочное согласие с настоящей Политикой.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">2. Оператор персональных данных</h2>
              <div className="rounded-lg border bg-muted/40 p-4 flex flex-col gap-1.5">
                <p><strong>Наименование:</strong> {company.name}</p>
                <p><strong>ИНН:</strong> 7455024270</p>
                <p><strong>ОГРН:</strong> 1157456024076</p>
                <p><strong>Юридический адрес:</strong> 455013, г. Магнитогорск, ул. Интернациональная, д. 1, корп. А</p>
                <p><strong>Фактический адрес:</strong> 455037, г. Магнитогорск, пр. Карла Маркса, д. 115, корп. 5, оф. 78</p>
                <p><strong>Email:</strong> {company.email}</p>
                <p><strong>Телефон:</strong> {company.phone}</p>
              </div>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">3. Какие данные мы собираем</h2>
              <p>При заполнении формы обратной связи на сайте Оператор собирает следующие персональные данные:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1">
                <li>Имя (фамилия, имя, отчество — при наличии);</li>
                <li>Номер телефона.</li>
              </ul>
              <p>Иные данные (cookies, IP-адрес, данные браузера) могут собираться автоматически в технических целях.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">4. Цели обработки персональных данных</h2>
              <p>Персональные данные обрабатываются в следующих целях:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1">
                <li>обратная связь с пользователем (звонок, консультация);</li>
                <li>подготовка коммерческих предложений;</li>
                <li>улучшение работы сайта и сервисов.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">5. Правовые основания обработки</h2>
              <p>Обработка персональных данных осуществляется на основании согласия субъекта персональных данных (ст. 9 Федерального закона № 152-ФЗ), выраженного при заполнении формы на сайте.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">6. Передача третьим лицам</h2>
              <p>Оператор не передаёт персональные данные третьим лицам без согласия субъекта, за исключением случаев, предусмотренных действующим законодательством Российской Федерации.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">7. Сроки хранения данных</h2>
              <p>Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, либо до момента отзыва согласия субъектом персональных данных.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">8. Права субъекта персональных данных</h2>
              <p>Пользователь вправе:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1">
                <li>получить информацию об обработке своих персональных данных;</li>
                <li>потребовать уточнения, блокирования или уничтожения данных;</li>
                <li>отозвать согласие на обработку персональных данных.</li>
              </ul>
              <p>Для реализации прав обращайтесь по адресу: <a href={`mailto:${company.email}`} className="text-primary underline underline-offset-2">{company.email}</a></p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">9. Использование файлов Cookie</h2>
              <p>Сайт использует файлы cookie для обеспечения корректной работы, анализа трафика и улучшения пользовательского опыта. Cookie не содержат персональных данных.</p>
              <p>Вы можете отключить cookie в настройках браузера. Это может повлиять на функциональность сайта.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">10. Изменения Политики</h2>
              <p>Оператор вправе вносить изменения в настоящую Политику. Новая редакция вступает в силу с момента её размещения на сайте.</p>
            </section>

          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
