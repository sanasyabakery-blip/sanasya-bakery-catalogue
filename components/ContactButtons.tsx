'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, Instagram } from 'lucide-react'

interface ContactButtonProps {
  label: string
  icon: React.ReactNode
  href: string
  primary?: boolean
}

function ContactButton({ label, icon, href, primary = false }: ContactButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium transition-all ${
        primary
          ? 'bg-caramel text-white hover:bg-opacity-90 shadow-md'
          : 'bg-cream text-chocolate border border-caramel hover:bg-blush'
      }`}
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  )
}

export default function ContactButtons() {
  // Read environment variables
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER
  const email = process.env.NEXT_PUBLIC_EMAIL
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL

  const buttons: ContactButtonProps[] = []

  // Only add WhatsApp if number exists
  if (whatsappNumber) {
    buttons.push({
      label: 'Message on WhatsApp',
      icon: <MessageCircle size={20} />,
      href: `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`,
      primary: true,
    })
  }

  // Only add phone if number exists
  if (phoneNumber) {
    buttons.push({
      label: 'Call Us',
      icon: <Phone size={20} />,
      href: `tel:${phoneNumber}`,
    })
  }

  // Only add email if exists
  if (email) {
    buttons.push({
      label: 'Email',
      icon: <Mail size={20} />,
      href: `mailto:${email}`,
    })
  }

  // Only add Instagram if URL exists
  if (instagramUrl) {
    buttons.push({
      label: 'Follow on Instagram',
      icon: <Instagram size={20} />,
      href: instagramUrl,
    })
  }

  // If no contact info, show placeholder
  if (buttons.length === 0) {
    return (
      <div className="text-center text-gray-300 py-4">
        <p>Contact information not configured</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {buttons.map((button) => (
        <ContactButton key={button.label} {...button} />
      ))}
    </div>
  )
}
