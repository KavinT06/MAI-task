'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const categories = [
  {
    label: 'Kitchens',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
  },
  {
    label: 'Worktops, Table Tops & Wall Cladding',
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&q=80',
  },
  {
    label: 'Stone Slab & Worktop Transport',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },
  {
    label: 'Roofing',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&q=80',
  },
  {
    label: 'Dry Stone Walling',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80',
  },
  {
    label: 'Flooring',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80',
  },
  {
    label: 'Worktop Removal',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="bg-[#f0f4f8] py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-[#1a5fb5] text-[11px] font-bold tracking-[0.25em] uppercase mb-2">
            GET ANY HOME REPAIR DONE
          </p>
          <h2 className="text-[#0c1e35] font-black text-3xl sm:text-4xl lg:text-[40px] leading-tight mb-3" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            Looking For A Service?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            From a dripping tap to a full loft conversion find the right{' '}
            <Link href="/traders" className="text-[#1a5fb5] underline">verified tradesperson</Link>{' '}
            for any job.
          </p>
        </motion.div>

        {/* Category scroll row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              className="flex flex-col items-center gap-2 cursor-pointer group flex-shrink-0"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Image */}
              <div className="w-[155px] h-[115px] rounded-xl overflow-hidden bg-gray-200 shadow-sm">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Label */}
              <p className="text-[#0c1e35] text-[12px] text-center leading-tight font-medium max-w-[150px]">
                {cat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8"
        >
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-[#0c1e35] text-white text-sm font-semibold rounded-full hover:bg-[#1a3a6b] transition-colors shadow-md"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}