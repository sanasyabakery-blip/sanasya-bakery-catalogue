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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-xl shadow-md p-6 border border-blush hover:shadow-xl transition-all duration-300 cursor-default"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-chocolate group-hover:text-caramel transition-colors">
            {title}
          </h3>
        </div>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>

      {/* Badge Section */}
      <div className="flex flex-wrap gap-2">

        {/* Egg Type Badge */}
        
        {/* <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${eggTypeColors[eggType]}`}
        >
          {eggType}
        </span> */}

        {/* Tag Badges */}
        {tags?.map((tag) => (
          <span
            key={tag}
            className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${tagColors[tag]}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
