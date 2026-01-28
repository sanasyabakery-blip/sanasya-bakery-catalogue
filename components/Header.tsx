'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

interface NavItem {
  label: string
  id: string
}

interface CategoryGroup {
  name: string
  items: NavItem[]
}

const navItems: NavItem[] = [
  { label: 'Biscuits & Rusks', id: 'biscuits-rusks' },
  { label: 'Cakes', id: 'cakes' },
  { label: 'Desserts', id: 'desserts' },
  { label: 'Brownies', id: 'brownies' },
  { label: 'Breads & Buns', id: 'breads-buns' },
  { label: 'Cupcakes & Tea Cakes', id: 'cupcakes-tea-cakes' },
  { label: 'Doughnuts', id: 'doughnuts' },
  { label: 'Chocolates', id: 'chocolates' },
  { label: 'Panna Cotta', id: 'panna-cotta' },
]

const categoryGroups: CategoryGroup[] = [
  {
    name: 'Bread & Baked Goods',
    items: [
      { label: 'Breads & Buns', id: 'breads-buns' },
      { label: 'Biscuits & Rusks', id: 'biscuits-rusks' },
    ]
  },
  {
    name: 'Cakes & Pastries',
    items: [
      { label: 'Cakes', id: 'cakes' },
      { label: 'Cupcakes & Tea Cakes', id: 'cupcakes-tea-cakes' },
      { label: 'Doughnuts', id: 'doughnuts' },
      { label: 'Panna Cotta', id: 'panna-cotta' },
    ]
  },
  {
    name: 'Treats & Indulgences',
    items: [
      { label: 'Brownies', id: 'brownies' },
      { label: 'Chocolates', id: 'chocolates' },
      { label: 'Desserts', id: 'desserts' },
    ]
  }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const popoverRef = useRef<HTMLDivElement>(null)

  const handleNavClick = (id: string) => {
    // Close menu immediately on mobile
    setIsOpen(false)
    
    // Use setTimeout to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        const offset = 100
        const elementPosition = element.offsetTop
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        })
      }
    }, 100)
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsOpen(false)
  }

  const handleContactClick = () => {
    // Close menu immediately on mobile
    setIsOpen(false)
    
    // Use setTimeout to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.getElementById('contact')
      if (element) {
        const offset = 100
        const elementPosition = element.offsetTop
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        })
      }
    }, 100)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-blush shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Animated */}
          <motion.button
            onClick={handleLogoClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 focus:outline-none"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-chocolate hover:text-caramel transition-colors duration-300">
              SANASYA BAKERY
            </h1>
          </motion.button>

          {/* Desktop Navigation - Category Pills */}
          <nav className="hidden lg:flex items-center gap-3" ref={popoverRef}>
            {categoryGroups.map((group, groupIndex) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                className="relative"
                onMouseEnter={() => setHoveredCategory(group.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <motion.button
                  onClick={() => handleNavClick(group.items[0].id)}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 bg-gradient-to-br from-blush to-blush/60 text-chocolate font-semibold text-sm rounded-full hover:text-caramel transition-all duration-300 border border-blush/40 hover:border-caramel/50 shadow-sm"
                >
                  {group.name}
                </motion.button>

                {/* Popover - Sub categories on hover */}
                <AnimatePresence>
                  {hoveredCategory === group.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-blush/30 rounded-xl shadow-lg z-50 min-w-max backdrop-blur-sm bg-white/95"
                    >
                      <div className="py-2 px-1">
                        {group.items.map((item, itemIndex) => (
                          <motion.button
                            key={item.id}
                            onClick={() => {
                              handleNavClick(item.id)
                              setHoveredCategory(null)
                            }}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.15, delay: itemIndex * 0.05 }}
                            whileHover={{ x: 6, backgroundColor: "rgba(248, 237, 225, 0.6)" }}
                            className="block w-full text-left px-4 py-2.5 text-sm font-medium text-chocolate hover:text-caramel rounded-lg transition-colors duration-200 whitespace-nowrap"
                          >
                            {item.label}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <motion.button
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:inline-flex px-3 sm:px-4 py-2 bg-caramel text-white rounded-lg font-medium text-xs sm:text-sm hover:bg-opacity-90 transition-all duration-300"
            >
              Enquire
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-cream rounded-lg transition-colors duration-300"
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
              className="lg:hidden mt-3 space-y-3 border-t border-blush pt-3 max-h-[60vh] overflow-y-auto"
            >
              {/* Categories Sections */}
              {categoryGroups.map((group, groupIndex) => (
                <motion.div
                  key={group.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: groupIndex * 0.1 }}
                  className="px-4 py-2"
                >
                  <motion.button
                    onClick={() => handleNavClick(group.items[0].id)}
                    whileHover={{ scale: 1.02 }}
                    className="w-full px-4 py-2.5 bg-gradient-to-br from-blush to-blush/60 text-chocolate font-semibold text-sm rounded-lg hover:text-caramel transition-all duration-300 border border-blush/40 hover:border-caramel/50 text-left"
                  >
                    {group.name}
                  </motion.button>
                  <div className="space-y-1 pl-2 mt-2 ml-2 border-l-2 border-blush/30">
                    {group.items.map((item) => (
                      <motion.button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        whileHover={{ x: 4 }}
                        className="block w-full text-left px-3 py-1.5 text-xs font-medium text-chocolate hover:bg-cream rounded-lg transition-colors duration-300"
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Divider */}
              <div className="border-t border-blush my-2"></div>

              {/* Enquire Button */}
              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.02 }}
                className="mx-4 block w-full px-4 py-2.5 bg-caramel text-white rounded-lg font-medium text-sm hover:bg-opacity-90 transition-all duration-300"
              >
                Enquire Now
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
