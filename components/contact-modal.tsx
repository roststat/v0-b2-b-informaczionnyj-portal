"use client"

import { useState } from "react"
import { submitLeadAction } from "@/app/actions/leads"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, Loader2 } from "lucide-react"
import { company } from "@/lib/data"

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("+7")
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; phone?: string; consent?: string }>({})

  function validate() {
    const newErrors: typeof errors = {}
    if (!name.trim()) newErrors.name = "Введите ваше имя"
    if (!phone.trim() || phone === "+7") {
      newErrors.phone = "Введите номер телефона"
    } else if (!/^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test(phone.trim())) {
      newErrors.phone = "Введите номер полностью"
    }
    if (!consent) newErrors.consent = "Необходимо согласие на обработку данных"
    return newErrors
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setLoading(true)
    const result = await submitLeadAction({ name, phone, source: "contact_modal" })
    setLoading(false)
    if (result.success) {
      setSubmitted(true)
    } else {
      setErrors({ phone: result.error })
    }
  }

  function handleClose(open: boolean) {
    if (!open) {
      setName("")
      setPhone("+7")
      setConsent(false)
      setSubmitted(false)
      setErrors({})
    }
    onOpenChange(open)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl leading-snug">
                Оставьте номер — мы перезвоним
              </DialogTitle>
              <DialogDescription className="text-sm leading-relaxed">
                Укажите имя и телефон, куда вам удобно перезвонить.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} noValidate className="mt-2 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="modal-name">Ваше имя</Label>
                <Input
                  id="modal-name"
                  placeholder="Иван Иванов"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="modal-phone">Номер телефона</Label>
                <Input
                  id="modal-phone"
                  type="tel"
                  placeholder="+7 (999) 000-00-00"
                  value={phone}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "")
                    const d = digits.startsWith("7") ? digits.slice(1) : digits.startsWith("8") ? digits.slice(1) : digits
                    let masked = "+7"
                    if (d.length > 0) masked += " (" + d.slice(0, 3)
                    if (d.length >= 3) masked += ") " + d.slice(3, 6)
                    if (d.length >= 6) masked += "-" + d.slice(6, 8)
                    if (d.length >= 8) masked += "-" + d.slice(8, 10)
                    setPhone(masked)
                  }}
                  autoComplete="tel"
                />
                {errors.phone && (
                  <p className="text-xs text-destructive">{errors.phone}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                  />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    Я согласен(а) на обработку персональных данных в
                    соответствии с&nbsp;
                    <a
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-foreground"
                    >
                      Политикой конфиденциальности
                    </a>{" "}
                    {company.name} согласно Федеральному закону №&nbsp;152-ФЗ
                    «О персональных данных».
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-destructive">{errors.consent}</p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  "Запросить КП"
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-lg font-semibold">Заявка принята!</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Менеджер свяжется с вами в течение 24 часов.
              </p>
            </div>
            <Button variant="outline" onClick={() => handleClose(false)}>
              Закрыть
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
