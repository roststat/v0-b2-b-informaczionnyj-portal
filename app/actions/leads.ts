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

  try {
    createLead(parsed.data)
    revalidatePath("/admin")
    return { success: true }
  } catch {
    return { success: false, error: "Ошибка сервера. Попробуйте позже." }
  }
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
