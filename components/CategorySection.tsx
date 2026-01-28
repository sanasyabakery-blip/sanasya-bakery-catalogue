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
}

export default function CategorySection({ title, sectionId, children }: CategorySectionProps) {
  return (
    <motion.section
      id={sectionId}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-serif font-bold text-chocolate mb-2 text-center"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="h-1 w-16 bg-gradient-to-r from-caramel to-transparent mx-auto mb-8"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  )
}
