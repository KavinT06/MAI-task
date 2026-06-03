'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, ArrowRight, Gem, Search, Shield } from 'lucide-react'
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from '@/lib/utils'

const valuePoints = [
  {
    icon: Gem,
    title: 'Post Your Project',
    description: 'Describe what you need, add dimensions, set your budget.',
    color: '#00c4b4',
  },
  {
    icon: Search,
    title: 'Get Matched Instantly',
    description: 'MAI finds sellers with matching offcuts in the UK.',
    color: '#1a3a6b',
  },
  {
    icon: Shield,
    title: 'Buy Safely & Save',
    description: 'Secure payment, verified sellers, up to 70% cheaper.',
    color: '#f5a623',
  },
]

export default function StoneOffcuts() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [budget, setBudget] = useState(5000)

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1628] font-display leading-tight"
          >
            Submit Your Project. Let MAI{' '}
            <span className="gradient-text">Find Your Perfect Stone.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Discover discounted stone offcuts on MAI, connecting you with verified UK sellers for
            secure, budget-friendly options.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Value Points */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {valuePoints.map((point, index) => (
              <motion.div
                key={point.title}
                variants={slideInLeft}
                className="flex gap-4 group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm transition-transform group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${point.color}15, ${point.color}25)`,
                  }}
                >
                  <point.icon size={24} style={{ color: point.color }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0a1628] font-display mb-1">
                    {point.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Highlight Box */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-[#00c4b4]/5 to-[#1a3a6b]/5 rounded-2xl p-6 border border-[#00c4b4]/15"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#00c4b4] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#0a1628] font-semibold text-sm">Save up to 70%</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Stone offcuts offer the same premium quality at a fraction of the cost. Perfect
                    for worktops, splashbacks, and more.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="bg-white rounded-3xl border border-gray-200 shadow-card p-6 lg:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0a1628] font-display">
                  Find Your Perfect Stone Offcut
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Set your offcut budget and MAI does the rest
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Project Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter project name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#00c4b4] focus:ring-2 focus:ring-[#00c4b4]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Stone Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-500 outline-none focus:border-[#00c4b4] focus:ring-2 focus:ring-[#00c4b4]/20 transition-all bg-white appearance-none">
                    <option>Select stone type</option>
                    <option>Granite</option>
                    <option>Marble</option>
                    <option>Quartz</option>
                    <option>Slate</option>
                    <option>Limestone</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Project Description
                  </label>
                  <textarea
                    placeholder="Enter description"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#00c4b4] focus:ring-2 focus:ring-[#00c4b4]/20 transition-all resize-none"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Budget Range</label>
                    <span className="text-lg font-bold text-[#0a1628] font-display">
                      £{budget.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={300}
                    max={25000}
                    step={100}
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #00c4b4 ${
                        ((budget - 300) / (25000 - 300)) * 100
                      }%, #e5e7eb ${((budget - 300) / (25000 - 300)) * 100}%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>£300</span>
                    <span>£25,000</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-teal w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 mt-2"
                >
                  Post Your Stones Project Now
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
