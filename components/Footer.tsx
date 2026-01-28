'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Read environment variables
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER
  const email = process.env.NEXT_PUBLIC_EMAIL
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-3">Sanasya</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Handcrafted bakery treats made with love and premium ingredients. Fresh bakes, custom orders, and artisanal excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('biscuits-rusks')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="hover:text-white transition-colors"
                >
                  Biscuits & Rusks
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('cakes')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="hover:text-white transition-colors"
                >
                  Cakes
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('desserts')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="hover:text-white transition-colors"
                >
                  Desserts
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('brownies')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="hover:text-white transition-colors"
                >
                  Brownies
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('breads-buns')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="hover:text-white transition-colors"
                >
                  Breads & Buns
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('cupcakes-tea-cakes')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="hover:text-white transition-colors"
                >
                  Cupcakes & Tea Cakes
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('doughnuts')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="hover:text-white transition-colors"
                >
                  Doughnuts
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('chocolates')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="hover:text-white transition-colors"
                >
                  Chocolates
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('panna-cotta')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="hover:text-white transition-colors"
                >
                  Panna Cotta
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact & Location</h4>
            <ul className="space-y-2 text-sm">
              <li className="pb-3 border-b border-gray-700">
                <p className="text-gray-400 text-xs font-semibold mb-1">VISIT US</p>
                <p className="text-gray-300">Vaikalmedu Rd, Ashok Nagar, Chettipalayam, Erode, Tamil Nadu 638002</p>
              </li>
              {whatsappNumber && (
                <li>
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              {phoneNumber && (
                <li>
                  <a href={`tel:${phoneNumber}`} className="hover:text-white transition-colors">
                    Call
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                    Email
                  </a>
                </li>
              )}
              {instagramUrl && (
                <li>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-gray-700 pt-8"
        >
          <p className="text-center text-sm text-gray-400">
            © {currentYear} Sanasya Bakery. All rights reserved. • Handcrafted with passion.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
