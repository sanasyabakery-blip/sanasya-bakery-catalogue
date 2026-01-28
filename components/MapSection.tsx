'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export default function MapSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-caramel" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-chocolate">
              Visit Us
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find us at our location and explore our fresh bakes in person
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-lg overflow-hidden shadow-lg border-4 border-caramel"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.823774568265!2d77.62391702346828!3d12.976246987346344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17f4f4f4f4f5%3A0x1234567890abcdef!2sSanasya%20Bakery!5e0!3m2!1sen!2sin!4v1704067200000"
            width="100%"
            height="500"
            style={{ border: 0, display: 'block' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sanasya Bakery Location"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 bg-white rounded-lg p-6 shadow-md border-l-4 border-caramel"
        >
          <h3 className="font-serif font-bold text-chocolate text-xl mb-2">
            Open Hours & Directions
          </h3>
          <p className="text-gray-700">
            Click on the map above to get full directions, or visit us at our bakery location.
            We&apos;re open daily with fresh bakes available. Perfect for orders, custom cakes, and bulk enquiries.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
