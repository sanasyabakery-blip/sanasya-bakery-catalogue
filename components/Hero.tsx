'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function Hero() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

  const handleEnquire = () => {
    if (whatsappNumber) {
      window.open(
        `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`,
        '_blank'
      )
    } else {
      const element = document.getElementById('contact')
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream to-white pt-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-chocolate mb-6"
        >
          Handcrafted Treats,{' '}
          <span className="text-caramel">Made with Love</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          Browse our premium collection of artisanal biscuits, elegant cakes, and exquisite desserts. Every creation crafted fresh with the finest ingredients.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={handleEnquire}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-caramel text-white rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg"
        >
          <MessageCircle size={24} />
          Enquire Now
        </motion.button>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-600"
        >
          <div>
            <p className="font-semibold text-chocolate mb-2">✓ Fresh & Artisanal</p>
            <p>Made-to-order with premium ingredients</p>
          </div>
          <div>
            <p className="font-semibold text-chocolate mb-2">✓ Custom Creations</p>
            <p>Tailored to your preferences</p>
          </div>
          <div>
            <p className="font-semibold text-chocolate mb-2">✓ Pure Quality</p>
            <p>Only the finest ingredients used</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
