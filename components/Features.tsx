'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BarChart3, Search, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/utils'

const features = [
  {
    icon: BarChart3,
    title: 'Dashboard',
    subtitle: 'Smart Project Management',
    description:
      'Keep track of every job in one clean dashboard, from your first quote request to the final sign-off.',
    points: ['Real-time project tracking', 'Budget management', 'Milestone monitoring'],
    color: '#1a3a6b',
    accent: '#00c4b4',
    preview: (
      <div className="bg-[#0a1628] rounded-xl p-3 text-xs space-y-2">
        <div className="flex items-center justify-between text-white/60">
          <span>Project Overview</span>
          <span className="text-[#00c4b4] font-bold">Jan - Apr</span>
        </div>
        {/* Mini chart bars */}
        <div className="flex items-end gap-1.5 h-12">
          {[40, 65, 50, 80, 60, 90, 75, 85].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm transition-all"
              style={{
                height: `${h}%`,
                backgroundColor: i % 2 === 0 ? '#00c4b4' : '#1a3a6b',
                opacity: 0.8,
              }}
            />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { v: '8', l: 'Posted', c: '#00c4b4' },
            { v: '5', l: 'Active', c: '#f5a623' },
            { v: '3', l: 'Pending', c: '#1a3a6b' },
            { v: '12', l: 'Done', c: '#00c4b4' },
          ].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-1.5 text-center">
              <div className="font-bold text-sm" style={{ color: s.c }}>
                {s.v}
              </div>
              <div className="text-white/40 text-[10px]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Search,
    title: 'Search With Postcode',
    subtitle: 'Find Local Experts',
    description:
      'Find tradespeople near you — just enter your county and browse verified, rated tradespeople in your area.',
    points: ['Location-based matching', 'Verified reviews', 'Instant quotes'],
    color: '#00c4b4',
    accent: '#009d8f',
    preview: (
      <div className="bg-white rounded-xl p-3 text-xs space-y-2 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
          <Search size={12} className="text-[#00c4b4]" />
          <span className="text-gray-400">SW1A 2AA</span>
        </div>
        <div className="space-y-1.5">
          {['James Miller', 'Sarah Chen', 'David Park'].map((name, i) => (
            <div key={name} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
              <div
                className="w-7 h-7 rounded-full text-white flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: ['#00c4b4', '#1a3a6b', '#f5a623'][i] }}
              >
                {name[0]}
              </div>
              <div className="flex-1">
                <div className="text-gray-700 font-medium">{name}</div>
                <div className="text-gray-400 text-xs">{['0.8', '1.2', '2.1'][i]} mi away</div>
              </div>
              <div className="text-amber-400 text-xs font-bold">★ {['4.9', '4.8', '4.7'][i]}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Sparkles,
    title: 'Write With AI',
    subtitle: 'AI-Powered Project Briefs',
    description:
      'Not sure how to describe your project? Our AI helps you write a clear, detailed brief in seconds. Just answer a few questions — we do the rest.',
    points: ['Smart brief generation', 'Professional proposals', 'Instant descriptions'],
    color: '#f5a623',
    accent: '#e8951c',
    preview: (
      <div className="bg-[#0a1628] rounded-xl p-3 text-xs space-y-2">
        <div className="flex items-center gap-2 text-[#f5a623]">
          <Sparkles size={12} />
          <span className="font-semibold">AI is writing...</span>
        </div>
        <div className="space-y-1.5 text-white/70 leading-relaxed">
          <div className="animate-pulse space-y-1">
            <div className="h-1.5 rounded bg-white/10 w-full" />
            <div className="h-1.5 rounded bg-white/10 w-5/6" />
            <div className="h-1.5 rounded bg-white/10 w-4/6" />
          </div>
          <div className="pt-1 text-white/40 text-xs">
            &quot;I need professional floor tiling for my 45m² kitchen using...&quot;
          </div>
        </div>
        <div className="flex gap-1">
          {['Natural', 'Modern', 'Luxury'].map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-[#f5a623]/20 text-[#f5a623] text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
]

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-[#f8fbff] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="section-badge">
            Your MAI Toolkit
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1628] font-display leading-tight"
          >
            Unlock Powerful Tools{' '}
            <span className="gradient-text">After Sign Up</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
            Everything You Need to Hire the Right Tradesperson.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={scaleIn}
              custom={index}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="group relative rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-shadow duration-400 bg-white"
            >
              {/* Top Accent */}
              <div
                className="h-1.5 w-full"
                style={{ background: `linear-gradient(90deg, ${feature.color}, ${feature.accent})` }}
              />

              <div className="p-6 lg:p-8">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20, ${feature.accent}30)`,
                  }}
                >
                  <feature.icon size={26} style={{ color: feature.color }} />
                </motion.div>

                {/* Text */}
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                    {feature.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-[#0a1628] font-display">{feature.title}</h3>
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>

                {/* Preview */}
                <div className="mb-5">{feature.preview}</div>

                {/* Points */}
                <ul className="space-y-1.5 mb-6">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} style={{ color: feature.color }} />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: feature.color }}
                >
                  Learn More
                  <ArrowRight size={15} />
                </motion.button>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${feature.color}, transparent 60%)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}