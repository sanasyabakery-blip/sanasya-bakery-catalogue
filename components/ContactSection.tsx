'use client'

import { motion } from 'framer-motion'
import ContactButtons from './ContactButtons'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-chocolate to-chocolate/90 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white"
        >
          Ready to Enquire?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-200 mb-8 leading-relaxed"
        >
          Customised fresh bakes made with premium ingredients. Discuss your requirements with us&mdash;bulk orders, special occasions, or custom creations. We&apos;d love to hear from you!
        </motion.p>

        {/* Contact Buttons with Light Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex flex-col items-center gap-4">
            <ContactButtons />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-gray-300 mt-8"
        >
          We typically respond within 2 hours during business hours
        </motion.p>
      </div>
    </section>
  )
}
