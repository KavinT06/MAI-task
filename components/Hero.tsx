'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, CheckCircle2 } from 'lucide-react'

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
  { label: '200K+ Trusted Traders' },
  { label: 'Transparent Bidding System' },
  { label: '11K Monthly Active Users' },
]

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const [searchText, setSearchText] = useState('')
  const [charIndex, setCharIndex] = useState(0)

  // Rotate word every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length)
      setCharIndex(0)
      setSearchText('')
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Type the word character by character
  useEffect(() => {
    const prefix = 'I Want '
    const fullText = prefix + rotatingWords[currentWord]
    if (charIndex < fullText.length) {
      const timer = setTimeout(() => {
        setSearchText(fullText.slice(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
      }, 55)
      return () => clearTimeout(timer)
    }
  }, [charIndex, currentWord])

  return (
    <section className="relative overflow-hidden" style={{ minHeight: 'calc(100vh - 116px)' }}>
      {/* Background: tiler laying floor tiles */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85"
          alt="Tiler at work"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark blue overlay matching original */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 22, 40, 0.62)' }} />
      </div>

      {/* Content - left aligned like original */}
      <div className="relative z-10 flex items-center" style={{ minHeight: 'calc(100vh - 116px)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full py-16">
          <div className="max-w-3xl">
            {/* Heading: left-aligned, big bold */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-black leading-[1.05] mb-4"
              style={{
                fontSize: 'clamp(36px, 5vw, 68px)',
                fontFamily: 'Arial Black, Impact, sans-serif',
              }}
            >
              We Find You The{' '}
              <span className="text-[#F0A500]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[currentWord]}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {rotatingWords[currentWord]}
                  </motion.span>
                </AnimatePresence>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                  className="inline-block w-[2px] h-[0.75em] bg-[#F0A500] ml-0.5 align-middle"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white/80 text-base sm:text-lg mb-8"
            >
              Find Local Trusted Tradespeople in Minutes
            </motion.p>

            {/* Search pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="max-w-[520px] mb-8"
            >
              <div className="flex items-center bg-white rounded-full overflow-hidden shadow-xl">
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="I Want Stone Repairs"
                  className="flex-1 px-6 py-4 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
                />
                <button className="flex items-center justify-center w-12 h-12 mr-2 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0">
                  <Search size={20} className="text-gray-500" />
                </button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center flex-wrap gap-6"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#00c4b4] flex-shrink-0" />
                  <span className="text-white/85 text-sm">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Talk to MAI button - matching the original green button */}
      <div className="absolute bottom-6 right-6 z-20">
        <button className="flex items-center gap-2 bg-[#00c4b4] text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg hover:bg-[#009d8f] transition-colors">
          <span className="w-4 h-4 rounded-full bg-white/30 flex items-center justify-center">
            <span className="text-[10px]">💬</span>
          </span>
          Talk to MAI ✦
        </button>
      </div>
    </section>
  )
}