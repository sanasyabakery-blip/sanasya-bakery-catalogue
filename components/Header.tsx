'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

interface NavItem {
  label: string
  id: string
}

const navItems: NavItem[] = [
  { label: 'Biscuits & Rusks', id: 'biscuits-rusks' },
  { label: 'Cakes', id: 'cakes' },
  { label: 'Desserts', id: 'desserts' },
  { label: 'Brownies', id: 'brownies' },
  { label: 'Breads & Buns', id: 'breads-buns' },
  { label: 'Cupcakes', id: 'cupcakes-tea-cakes' },
  { label: 'Doughnuts', id: 'doughnuts' },
  { label: 'Chocolates', id: 'chocolates' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Account for sticky header height (approximately 70px)
      const offset = 70
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      })
      setIsOpen(false)
    }
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsOpen(false)
  }

  const handleContactClick = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offset = 70
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      })
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-blush shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Animated */}
          <motion.button
            onClick={handleLogoClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 focus:outline-none"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-chocolate hover:text-caramel transition-colors">
              Sanasya Bakery
            </h1>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-xs xl:text-sm font-medium text-chocolate hover:text-caramel transition-colors whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <motion.button
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:inline-flex px-3 sm:px-4 py-2 bg-caramel text-white rounded-lg font-medium text-xs sm:text-sm hover:bg-opacity-90 transition-all"
            >
              Enquire
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-cream rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-3 space-y-2 border-t border-blush pt-3 max-h-[60vh] overflow-y-auto"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm text-chocolate hover:bg-cream rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleContactClick}
                className="block w-full text-left px-4 py-2 bg-caramel text-white rounded-lg font-medium text-sm hover:bg-opacity-90 transition-all"
              >
                Enquire Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
