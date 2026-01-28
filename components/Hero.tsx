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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.320, 1],
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cream to-white pt-20">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-chocolate mb-6 leading-tight"
        >
          Handcrafted Treats,{' '}
          <span className="text-caramel">Made with Love</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          Browse our premium collection of artisanal biscuits, elegant cakes, and exquisite desserts. Every creation crafted fresh with the finest ingredients.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={handleEnquire}
          variants={itemVariants}
          whileHover={{ scale: 1.08, boxShadow: '0 20px 40px rgba(212, 165, 116, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-caramel text-white rounded-xl font-semibold text-lg hover:bg-opacity-90 transition-all duration-500 shadow-xl"
        >
          <MessageCircle size={24} />
          Enquire Now
        </motion.button>

        {/* Trust Indicators */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-600"
        >
          {[
            { title: '✓ Fresh & Artisanal', desc: 'Made-to-order with premium ingredients' },
            { title: '✓ Custom Creations', desc: 'Tailored to your preferences' },
            { title: '✓ Pure Quality', desc: 'Only the finest ingredients used' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group"
            >
              <p className="font-semibold text-chocolate mb-2 group-hover:text-caramel transition-colors duration-300">{item.title}</p>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
