'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const differences = [
  {
    number: '01',
    title: 'AI-Matched Traders',
    description:
      "Stop sifting through hundreds of irrelevant trader profiles. MAI's intelligent matching engine notifies your project with every qualified tradespeople whose skills, availability, location and work style align precisely with your project.",
    numberColor: '#b8cce0',
  },
  {
    number: '02',
    title: 'End-to-End Project Transparency',
    description:
      "From milestones to payments, every stage of your project lives in one place. MAI's real-time dashboard gives you complete visibility over progress, budgets, and deliverables, eliminating the back-and-forth that slows projects down.",
    numberColor: '#9ec4d8',
  },
  {
    number: '03',
    title: 'Milestone-Secured Payments',
    description:
      "Your investment is protected at every step. MAI's secured payment system releases funds only when agreed milestones are met and approved, giving both project owners and professionals the security to focus on doing great work.",
    numberColor: '#c4b8d8',
  },
  {
    number: '04',
    title: 'A Verified Community You Can Trust',
    description:
      "Every professional on MAI is rigorously reviewed, verified, and rated by the community. You're not hiring blindly, you're choosing from a trusted network of proven experts backed by real project history, reviews, and credentials.",
    numberColor: '#d4c0b0',
  },
]

export default function OurDifference() {
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
            OUR DIFFERENCE
          </p>
          <h2 className="text-[#0c1e35] font-black text-3xl sm:text-4xl lg:text-[42px] leading-tight mb-3" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            Where Traders &amp; Homeowners Both Win
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            From first brief to final delivery. MAI gives you the tools, talent, and transparency to build with confidence.
          </p>
        </motion.div>

        {/* 2x2 grid with divider lines */}
        <div className="grid md:grid-cols-2 border border-gray-200 rounded-2xl overflow-hidden">
          {differences.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`relative p-8 lg:p-10 bg-white ${
                index < 2 ? 'border-b border-gray-200' : ''
              } ${index % 2 === 0 ? 'md:border-r border-gray-200' : ''}`}
            >
              {/* Large watermark number behind */}
              <div
                className="absolute top-4 left-6 font-black select-none leading-none pointer-events-none"
                style={{
                  fontSize: '90px',
                  color: item.numberColor,
                  opacity: 0.6,
                  fontFamily: 'Arial Black, sans-serif',
                }}
              >
                {item.number}
              </div>

              <div className="relative z-10 pt-14 lg:pt-16">
                <h3 className="text-[#0c1e35] font-bold text-lg lg:text-xl mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
