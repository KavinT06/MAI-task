'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function BottomCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="overflow-hidden">

      {/* ===== READY TO GET STARTED ===== */}
      {/* Light gray bg wrapping a card with rounded corners */}
      <div className="bg-[#f0f4f8] px-6 lg:px-12 py-10 lg:py-14">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
            style={{ minHeight: '300px' }}
          >
            {/* Background: sunset/construction site */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85"
                alt="Construction workers at sunset"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#0c1e35]/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 lg:py-20">
              <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-[44px] mb-4" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                Ready To Get Started?
              </h2>
              <p className="text-white/80 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
                Have 10 minutes? Check out our case studies. We've been in the industry for more than a decade. So there's lots of exciting stuff in here.
              </p>
              <Link
                href="/signup"
                className="inline-block px-8 py-3 bg-white text-[#0c1e35] text-sm font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                Sign Up Now
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== LET'S BUILD OUR NATION GREAT ===== */}
      {/* Dark navy section with grid/cross-hatch pattern */}
      <div className="relative bg-[#0c1e35] py-12 lg:py-16 overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(100,150,200,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(100,150,200,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Blueprint/architectural lines visible in background */}
        <div className="absolute inset-0 z-0">
          {/* Vertical lines at various positions */}
          {[0.3, 0.35, 0.4, 0.45, 0.5].map((pos, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0"
              style={{
                left: `${pos * 100}%`,
                width: '1px',
                background: 'rgba(100,150,220,0.08)',
              }}
            />
          ))}
          {/* Horizontal lines */}
          {[0.3, 0.5, 0.7].map((pos, i) => (
            <div
              key={i}
              className="absolute left-0 right-0"
              style={{
                top: `${pos * 100}%`,
                height: '1px',
                background: 'rgba(100,150,220,0.08)',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

            {/* Left: Headline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-lg"
            >
              <p className="text-[#1a7fd4] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
                START TODAY — IT'S FREE
              </p>
              <h2 className="font-black leading-[1.0]" style={{ fontFamily: 'Arial Black, sans-serif', fontSize: 'clamp(40px, 5vw, 64px)' }}>
                <span className="text-white">Let's </span>
                <span className="text-[#1a9ed4]">Build</span>
                <br />
                <span className="text-white/50">Our Nation Great.</span>
              </h2>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed mt-4 max-w-md">
                Connect with verified UK tradespeople or find your next project. MAI brings the right people together.
              </p>
            </motion.div>

            {/* Right: Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <Link
                href="/post-a-project"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a5fb5] text-white font-bold text-sm rounded-lg hover:bg-[#2470c9] transition-colors shadow-lg"
              >
                Post a Project
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/25 text-white font-semibold text-sm rounded-lg hover:bg-white/5 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
