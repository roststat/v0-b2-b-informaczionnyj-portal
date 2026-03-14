import fs from "fs"
import path from "path"
import { randomUUID } from "crypto"

export type LeadStatus = "new" | "processed"
export type LeadSource = "contact_modal" | "contact_page"

export interface Lead {
  id: string
  name: string
  phone: string
  status: LeadStatus
  source: LeadSource
  createdAt: string // ISO string
  processedAt: string | null
}

const DB_PATH = path.join(process.cwd(), "data", "leads.json")

function ensureFile() {
  const dir = path.dirname(DB_PATH)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  if (!fs.existsSync(DB_PATH)) fs.writeFileSync(DB_PATH, "[]", "utf-8")
}

export function readLeads(): Lead[] {
  ensureFile()
  try {
    const raw = fs.readFileSync(DB_PATH, "utf-8")
    return JSON.parse(raw) as Lead[]
  } catch {
    return []
  }
}

function writeLeads(leads: Lead[]): void {
  ensureFile()
  fs.writeFileSync(DB_PATH, JSON.stringify(leads, null, 2), "utf-8")
}

export function createLead(
  data: Pick<Lead, "name" | "phone" | "source">
): Lead {
  const leads = readLeads()
  const lead: Lead = {
    id: randomUUID(),
    name: data.name,
    phone: data.phone,
    source: data.source,
    status: "new",
    createdAt: new Date().toISOString(),
    processedAt: null,
  }
  leads.unshift(lead) // newest first
  writeLeads(leads)
  return lead
}

export function toggleLeadStatus(id: string): Lead | null {
  const leads = readLeads()
  const idx = leads.findIndex((l) => l.id === id)
  if (idx === -1) return null

  const lead = leads[idx]
  if (lead.status === "new") {
    lead.status = "processed"
    lead.processedAt = new Date().toISOString()
  } else {
    lead.status = "new"
    lead.processedAt = null
  }
  writeLeads(leads)
  return lead
}

export function deleteLead(id: string): boolean {
  const leads = readLeads()
  const filtered = leads.filter((l) => l.id !== id)
  if (filtered.length === leads.length) return false
  writeLeads(filtered)
  return true
}
