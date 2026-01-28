'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { type Category } from '@/data/menu'

interface CategorySectionProps {
  title: string
  sectionId: string
  children: ReactNode
}

// Map category names to section IDs
const categoryIdMap: Record<Category, string> = {
  'Biscuits & Rusks': 'biscuits-rusks',
  Cakes: 'cakes',
  Desserts: 'desserts',
  Brownies: 'brownies',
  'Breads & Buns': 'breads-buns',
  'Cupcakes & Tea Cakes': 'cupcakes-tea-cakes',
  Doughnuts: 'doughnuts',
  Chocolates: 'chocolates',
  'Panna Cotta': 'panna-cotta',
}

export default function CategorySection({ title, sectionId, children }: CategorySectionProps) {
  return (
    <motion.section
      id={sectionId}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.320, 1] }}
      className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.320, 1] }}
        className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-3 text-center"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.320, 1] }}
        className="h-1.5 w-20 bg-gradient-to-r from-caramel via-chocolate to-transparent mx-auto mb-10 rounded-full"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </motion.section>
  )
}
