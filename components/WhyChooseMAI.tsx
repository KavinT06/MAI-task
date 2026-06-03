'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/utils'

const traders = [
  { name: 'Lloyd Wilkinson', initials: 'LW', color: '#00c4b4' },
  { name: 'Mohamad Almustafa', initials: 'MA', color: '#1a3a6b' },
  { name: 'Mahmood Darr', initials: 'MD', color: '#f5a623' },
  { name: 'Driss El Aissati', initials: 'DE', color: '#00c4b4' },
  { name: 'Lewis Dawson', initials: 'LD', color: '#1a3a6b' },
]

const translateClasses = [
  'md:translate-y-12 xl:translate-y-24',
  'md:translate-y-0 xl:translate-y-14',
  'md:translate-y-0 xl:translate-y-0',
  'md:translate-y-0 xl:translate-y-14',
  'md:translate-y-12 xl:translate-y-24',
]

export default function WhyChooseMAI() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [startIndex, setStartIndex] = useState(0)

  const visibleTraders = traders.slice(startIndex, startIndex + 5)

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setStartIndex((prev) => Math.min(traders.length - 5, prev + 1))
  }

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-white to-[#f0f5fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="section-badge">
            Trusted By Homeowners
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1628] font-display leading-tight"
          >
            Why Choose MAI
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Every trader on MAI is verified, rated, and ready to work — so you get competitive bids
            from qualified professionals, not random strangers.
          </motion.p>
        </motion.div>

        {/* Trader Cards - V-shape layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative mb-12"
        >
          <div className="flex items-start justify-center gap-4 md:gap-6 lg:gap-8 pb-16 md:pb-28">
            {visibleTraders.map((trader, index) => (
              <motion.div
                key={trader.name}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`flex flex-col items-center cursor-pointer group transition-transform duration-300 ${translateClasses[index] || ''}`}
              >
                {/* Avatar */}
                <div
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:shadow-xl transition-shadow"
                  style={{ backgroundColor: trader.color }}
                >
                  <span className="text-white font-bold text-lg md:text-xl lg:text-2xl font-display">
                    {trader.initials}
                  </span>
                </div>

                {/* Name */}
                <p className="mt-3 text-[#0a1628] font-semibold text-xs md:text-sm text-center max-w-[100px] leading-tight group-hover:text-[#00c4b4] transition-colors">
                  {trader.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0a1628] hover:border-gray-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-white shadow-sm"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              disabled={startIndex >= traders.length - 5}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0a1628] hover:border-gray-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-white shadow-sm"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.a
            href="/trader-list"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-teal px-8 py-3.5 text-sm font-bold rounded-xl inline-flex items-center gap-2"
          >
            View All Traders
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
