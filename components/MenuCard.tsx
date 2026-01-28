'use client'

import { motion } from 'framer-motion'
import { type MenuItem } from '@/data/menu'

interface MenuCardProps extends MenuItem {}

export default function MenuCard({
  title,
  description,
  category,
  eggType,
  tags,
}: MenuCardProps) {
  const eggTypeColors: Record<string, string> = {
    Egg: 'bg-amber-50 text-amber-700',
    Eggless: 'bg-green-50 text-green-700',
    'Available Both': 'bg-blue-50 text-blue-700',
  }

  const tagColors: Record<string, string> = {
    bestseller: 'bg-red-50 text-red-700',
    classic: 'bg-purple-50 text-purple-700',
    premium: 'bg-yellow-50 text-yellow-700',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.320, 1] }}
      whileHover={{ y: -12, boxShadow: '0 25px 50px rgba(62, 39, 35, 0.15)' }}
      className="group bg-white rounded-2xl shadow-lg p-6 border border-blush hover:border-caramel transition-all duration-500 cursor-default"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg font-semibold text-chocolate group-hover:text-caramel transition-colors duration-300"
          >
            {title}
          </motion.h3>
        </div>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-sm text-gray-600 leading-relaxed mb-4"
      >
        {description}
      </motion.p>

      {/* Badge Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-2"
      >

        {/* Egg Type Badge */}
        
        {/* <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${eggTypeColors[eggType]}`}
        >
          {eggType}
        </span> */}

        {/* Tag Badges */}
        {tags?.map((tag, index) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.25 + index * 0.05 }}
            className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${tagColors[tag]}`}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}
