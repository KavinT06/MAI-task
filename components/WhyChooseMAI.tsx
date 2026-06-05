'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const traders = [
  {
    initials: 'LW',
    name: 'Lloyd Wilkinson',
    bg: '#c8d4e0',
  },
  {
    initials: 'MA',
    name: 'Mohamad ALMUSTAFA',
    bg: '#c8d4e0',
  },
  {
    initials: 'MD',
    name: 'Mahmood Darr',
    bg: '#c8d4e0',
    center: true,
  },
  {
    initials: 'DE',
    name: 'Driss El Aissati',
    bg: '#c8d4e0',
  },
  {
    initials: 'LD',
    name: 'Lewis Dawson',
    bg: '#c8d4e0',
  },
]

export default function WhyChooseMAI() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [centerIndex, setCenterIndex] = useState(2)

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + traders.length) % traders.length)
  }
  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % traders.length)
  }

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-[#f0f4f8]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[#1a5fb5] text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
            TRUSTED BY HOMEOWNERS
          </p>
          <h2 className="text-[#0c1e35] font-black text-3xl sm:text-4xl lg:text-[42px] leading-tight mb-3" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            Why Choose MAI
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Every trader on MAI is{' '}
            <span className="text-[#1a5fb5]">verified</span>, rated, and ready to work, so you get{' '}
            <span className="text-[#1a5fb5]">competitive bids</span> from{' '}
            <span className="text-[#1a5fb5]">qualified professionals</span>, not random strangers.
          </p>
        </motion.div>

        {/* Trader cards: V-shape with center elevated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-end justify-center gap-4 mb-8"
        >
          {traders.map((trader, i) => {
            const isCenter = i === 2
            const isNearCenter = i === 1 || i === 3
            const height = isCenter ? 'h-[340px]' : isNearCenter ? 'h-[280px]' : 'h-[230px]'
            const width = isCenter ? 'w-[200px]' : isNearCenter ? 'w-[178px]' : 'w-[155px]'

            return (
              <motion.div
                key={trader.initials}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className={`${width} ${height} rounded-2xl relative flex flex-col justify-end overflow-hidden cursor-pointer flex-shrink-0`}
                style={{ backgroundColor: trader.bg }}
              >
                {/* Initials in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#0c1e35]/70 font-black text-4xl" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                    {trader.initials}
                  </span>
                </div>

                {/* Bottom gradient + name */}
                <div className={`relative z-10 px-4 py-3 ${isCenter ? 'bg-gradient-to-t from-[#0c1e35]/80 via-[#0c1e35]/30 to-transparent' : 'bg-gradient-to-t from-[#0c1e35]/70 via-[#0c1e35]/20 to-transparent'}`}>
                  <p className={`text-white font-bold leading-tight ${isCenter ? 'text-sm' : 'text-xs'}`}>
                    {trader.name}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Navigation + View All */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-5"
        >
          {/* Prev/Next buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft size={18} className="text-[#0c1e35]" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronRight size={18} className="text-[#0c1e35]" />
            </button>
          </div>

          <Link
            href="/traders"
            className="inline-block px-8 py-3 bg-[#0c1e35] text-white text-sm font-bold rounded-full hover:bg-[#1a3a6b] transition-colors shadow-md"
          >
            View All Traders
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
