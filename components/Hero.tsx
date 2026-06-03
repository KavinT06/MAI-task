'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Shield, Users, TrendingUp } from 'lucide-react'

const rotatingWords = [
  'Wall Tilers',
  'Worktop Fitters',
  'Stone Repairs',
  'Worktop Fabricator',
  'Stone Offcuts',
  'Trusted Stonemason',
  'Kitchen Installers',
  'Bathroom Designers',
  'Firehearth Fitters',
  'Remnant Slabs',
  'Wall Claddings',
  'Bathroom Tiling',
  'Wall Insulations',
  'Interior Decorators',
]

const stats = [
  { icon: Users, value: '200K+', label: 'Trusted Traders' },
  { icon: TrendingUp, value: 'Transparent', label: 'Bidding System' },
  { icon: Shield, value: '11K', label: 'Monthly Active Users' },
]

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85"
          alt="Tiling background"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/65 to-[#0a1628]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/40 via-transparent to-[#0a1628]/20" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-[#00c4b4]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-[#1a3a6b]/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline with rotating text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.08] tracking-tight mb-4 font-display"
          >
            We Find You The{' '}
            <br className="hidden sm:block" />
            Local{' '}
            <span className="relative inline-block min-w-[200px] sm:min-w-[300px] lg:min-w-[400px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[currentWord]}
                  initial={{ y: 40, opacity: 0, rotateX: -30 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -40, opacity: 0, rotateX: 30 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block gradient-text-gold"
                >
                  {rotatingWords[currentWord]}
                </motion.span>
              </AnimatePresence>
              {/* Blinking cursor */}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block w-[3px] h-[0.8em] bg-[#f5a623] ml-1 align-middle"
              />
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mb-4 section-divider"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Find Local Trusted Tradespeople in Minutes
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-2xl p-2 max-w-2xl mx-auto mb-14 shadow-2xl border border-white/10"
          >
            <div className="flex gap-2">
              <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3.5">
                <Search size={18} className="text-[#00c4b4] flex-shrink-0" />
                <input
                  type="text"
                  placeholder="I Want Worktop"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 text-gray-700 text-sm placeholder:text-gray-400 outline-none bg-transparent font-medium"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-teal px-6 py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Search size={16} />
                Search
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center flex-wrap gap-8 sm:gap-12"
          >
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00c4b4]/15 border border-[#00c4b4]/20 flex items-center justify-center">
                  <Icon size={18} className="text-[#00c4b4]" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-lg leading-none font-display">{value}</div>
                  <div className="text-white/50 text-xs mt-0.5">{label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave/gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}