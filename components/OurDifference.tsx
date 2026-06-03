'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cpu, Eye, ShieldCheck, Users } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/utils'

const differences = [
  {
    number: '01',
    icon: Cpu,
    title: 'AI-Matched Traders',
    description:
      "Stop sifting through hundreds of irrelevant trader profiles. MAI's intelligent matching engine notifies your project with every qualified tradespeople whose skills, availability, location and work style align precisely with your project.",
    color: '#00c4b4',
  },
  {
    number: '02',
    icon: Eye,
    title: 'End-to-End Project Transparency',
    description:
      "From milestones to payments, every stage of your project lives in one place. MAI's real-time dashboard gives you complete visibility over progress, budgets, and deliverables, eliminating the back-and-forth that slows projects down.",
    color: '#1a3a6b',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Milestone-Secured Payments',
    description:
      "Your investment is protected at every step. MAI's secured payment system releases funds only when agreed milestones are met and approved, giving both project owners and professionals the security to focus on doing great work.",
    color: '#f5a623',
  },
  {
    number: '04',
    icon: Users,
    title: 'A Verified Community You Can Trust',
    description:
      "Every professional on MAI is rigorously reviewed, verified, and rated by the community. You're not hiring blindly, you're choosing from a trusted network of proven experts backed by real project history, reviews, and credentials.",
    color: '#00c4b4',
  },
]

export default function OurDifference() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

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
          <motion.span variants={fadeInUp} className="section-badge">
            Our Difference
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1628] font-display leading-tight"
          >
            Where Traders & Homeowners{' '}
            <span className="gradient-text">Both Win</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            From first brief to final delivery. MAI gives you the tools, talent, and transparency to
            build with confidence.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {differences.map((item, index) => (
            <motion.div
              key={item.number}
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
            >
              {/* Number watermark */}
              <div
                className="absolute top-4 right-6 text-6xl lg:text-7xl font-black opacity-[0.04] font-display select-none"
                style={{ color: item.color }}
              >
                {item.number}
              </div>

              <div className="relative flex gap-4">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}15, ${item.color}25)`,
                  }}
                >
                  <item.icon size={22} style={{ color: item.color }} />
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{
                        color: item.color,
                        backgroundColor: `${item.color}15`,
                      }}
                    >
                      {item.number}
                    </span>
                    <h3 className="text-lg font-bold text-[#0a1628] font-display group-hover:text-[#00c4b4] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 0% 0%, ${item.color}, transparent 60%)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
