"use server"

import { revalidatePath } from "next/cache"
import { createLead, toggleLeadStatus, deleteLead } from "@/lib/leads"
import { z } from "zod"

const submitSchema = z.object({
  name: z.string().min(2, "Введите имя"),
  phone: z
    .string()
    .regex(/^[\d\s\+\-\(\)]{7,20}$/, "Некорректный номер телефона"),
  source: z.enum(["contact_modal", "contact_page"]).default("contact_modal"),
})

export async function submitLeadAction(formData: {
  name: string
  phone: string
  source?: string
}) {
  const parsed = submitSchema.safeParse(formData)
  if (!parsed.success) {
    return { success: false, error: parsed.error.errors[0].message }
  }

  // Отправка уведомления в Telegram (независимо от записи в файл)
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  console.log("[Telegram] token present:", !!token, "chatId present:", !!chatId)
  if (token && chatId) {
    const source = parsed.data.source === "contact_page" ? "Страница контактов" : "Форма на сайте"
    const text = `🔔 *Новая заявка с сайта МАКСФЛОК*\n\n👤 Имя: ${parsed.data.name}\n📞 Телефон: ${parsed.data.phone}\n📍 Источник: ${source}`
    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
    }).catch((e) => { console.log("[Telegram] fetch error:", e); return null })
    console.log("[Telegram] response:", tgRes ? await tgRes.text() : "null")
  }

  try {
    createLead(parsed.data)
    revalidatePath("/admin")
  } catch {
    // На Vercel файловая система read-only — игнорируем ошибку записи
  }

  return { success: true }
}

export async function toggleLeadStatusAction(id: string) {
  const lead = toggleLeadStatus(id)
  if (!lead) return { success: false }
  revalidatePath("/admin")
  return { success: true, lead }
}

export async function deleteLeadAction(id: string) {
  const ok = deleteLead(id)
  revalidatePath("/admin")
  return { success: ok }
}
