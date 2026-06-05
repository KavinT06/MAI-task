'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[#1a5fb5] text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
            YOUR MAI TOOLKIT
          </p>
          <h2 className="text-[#0c1e35] font-black text-3xl sm:text-4xl lg:text-[42px] leading-tight mb-3" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            Unlock Powerful Tools After Sign Up
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Everything You Need to{' '}
            <span className="text-[#1a5fb5]">Hire the Right Tradesperson</span>
          </p>
        </motion.div>

        {/* 3-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {/* Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#f7f9fc] rounded-2xl p-6 flex flex-col"
          >
            <h3 className="text-[#0c1e35] font-bold text-xl text-center mb-2">Dashboard</h3>
            <p className="text-gray-500 text-sm text-center leading-relaxed mb-6">
              Keep track of{' '}
              <span className="text-[#1a5fb5]">every job</span> in one clean dashboard, from your{' '}
              <span className="text-[#1a5fb5]">first quote request</span> to the{' '}
              <span className="text-[#1a5fb5]">final sign-off</span>.
            </p>
            {/* Dashboard UI mockup */}
            <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <p className="text-[11px] font-semibold text-[#0c1e35]">Project Overview</p>
                <p className="text-[10px] text-gray-400 mt-0.5">This Year - 2026 ▾</p>
              </div>
              {/* Legend */}
              <div className="flex flex-wrap gap-2 px-4 py-2 text-[9px] text-gray-400">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-blue-400 inline-block"/>&bull; Active Project</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-gray-300 inline-block"/>&bull; Pending</span>
              </div>
              {/* Bar chart */}
              <div className="px-4 pb-4">
                <div className="flex items-end justify-between gap-2 h-20 mt-2">
                  {[40, 65, 45, 80, 55, 70, 50, 85, 60, 75, 55, 90].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col gap-0.5 items-center">
                      <div style={{ height: `${h}%` }} className="w-full rounded-sm bg-blue-400 opacity-80" />
                      <div style={{ height: `${100 - h}%` }} className="w-full rounded-sm bg-gray-200" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[8px] text-gray-400 mt-1">
                  {['Jan', 'Feb', 'Mar', 'Apr'].map((m) => <span key={m}>{m}</span>)}
                </div>
              </div>
              {/* Ratings row */}
              <div className="px-4 py-2 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] text-gray-600 font-medium">Ratings</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-[11px] font-bold text-[#0c1e35]">4.9</span>
                  <span className="text-[9px] text-gray-400">All Time</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Search With Postcode Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#f7f9fc] rounded-2xl p-6 flex flex-col"
          >
            <h3 className="text-[#0c1e35] font-bold text-xl text-center mb-2">Search With Postcode</h3>
            <p className="text-gray-500 text-sm text-center leading-relaxed mb-6">
              Find tradespeople near you, just enter your county and browse{' '}
              <span className="text-[#1a5fb5]">verified, rated tradespeople</span> in your area.
            </p>
            {/* Map + list mockup */}
            <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Trader list items */}
              <div className="divide-y divide-gray-100">
                {[
                  { init: 'DL', name: 'Devon Lane', loc: 'N14 1TL', stars: 4.4 },
                  { init: 'EP', name: 'Eleanor Pena', loc: 'AL5 3TB', stars: 4.4 },
                  { init: 'RF', name: 'Robert Fox', loc: 'E3B 3Q4', stars: 4.4 },
                  { init: 'WW', name: 'Wade Warren', loc: 'England', stars: 4.4 },
                ].map((trader) => (
                  <div key={trader.name} className="flex items-center gap-3 px-3 py-2">
                    <div className="w-8 h-8 rounded-full bg-[#1a3a6b] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[9px] font-bold">{trader.init}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-semibold text-[#0c1e35] truncate">{trader.name}</p>
                      <p className="text-[9px] text-gray-400">{trader.loc}</p>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <span className="text-yellow-400 text-[10px]">★</span>
                      <span className="text-[9px] text-gray-600">{trader.stars}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Map placeholder */}
              <div className="h-28 bg-[#e8f0f8] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=60"
                  alt="Map"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#1a5fb5] ring-4 ring-[#1a5fb5]/30" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Write With AI Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#f7f9fc] rounded-2xl p-6 flex flex-col"
          >
            <h3 className="text-[#0c1e35] font-bold text-xl text-center mb-2">Write With AI</h3>
            <p className="text-gray-500 text-sm text-center leading-relaxed mb-6">
              Not sure how to describe your project? Our AI helps you write a clear, detailed brief in seconds. Just answer a few{' '}
              <span className="text-[#1a5fb5]">questions, we do the rest</span>.
            </p>
            {/* AI text editor mockup */}
            <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-4">
              <p className="text-[11px] font-semibold text-[#0c1e35] mb-2">Modern Kitchen Renovation</p>
              <div className="bg-[#f7f9fc] rounded-lg p-3 text-[11px] text-gray-500 leading-relaxed">
                This project involves renovating an existing kitchen to enhance functionality, layout efficiency, and overall aesthetics. The space measures roughly 12x15 feet...
              </div>
              <div className="mt-4 flex justify-end">
                <button className="flex items-center gap-1.5 text-[11px] font-semibold text-[#1a5fb5] bg-[#e8f0fb] px-3 py-1.5 rounded-full hover:bg-[#d0e3f7] transition-colors">
                  <span>✦</span> Write with MAI AI
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}