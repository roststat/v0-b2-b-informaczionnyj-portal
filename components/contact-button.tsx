"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/contact-modal"
import { ArrowRight } from "lucide-react"

interface ContactButtonProps {
  size?: "default" | "sm" | "lg"
  className?: string
  label?: string
}

export function ContactButton({
  size = "lg",
  className,
  label = "Заполнить форму обратной связи",
}: ContactButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button size={size} className={className} onClick={() => setOpen(true)}>
        {label}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <ContactModal open={open} onOpenChange={setOpen} />
    </>
  )
}
