'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { staggerContainer, fadeInUp } from '@/lib/utils'

export default function BottomCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="overflow-hidden">
      {/* Ready To Get Started */}
      <div className="py-20 lg:py-24 bg-gradient-to-b from-white to-[#f0f5fa]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="section-badge">
              <Sparkles size={12} />
              Start Today — It&apos;s Free
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1628] font-display leading-tight mb-4"
          >
            Ready To Get Started?
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-gray-500 max-w-xl mx-auto text-lg mb-10">
            Have 10 minutes? Check out our case studies. We&apos;ve been in the industry for more
            than a decade. So there&apos;s lots of exciting stuff in here.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/signup"
                className="btn-teal px-10 py-4 text-base font-bold rounded-xl inline-flex items-center gap-2"
              >
                Sign Up Now
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Let's Build Banner */}
      <div className="relative py-20 lg:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#1a3a6b]" />
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#00c4b4]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#1a3a6b]/30 blur-3xl" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <motion.p
                variants={fadeInUp}
                className="text-[#00c4b4] text-sm font-semibold tracking-widest uppercase mb-3"
              >
                Join MAI Today
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display leading-tight mb-4"
              >
                Let&apos;s Build{' '}
                <span className="gradient-text-gold">Our Nation Great.</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-white/70 text-lg leading-relaxed mb-8"
              >
                Connect with verified UK tradespeople or find your next project. MAI brings the
                right people together.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/post-a-project"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1F5CAC] text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 transition-shadow"
                  >
                    Post a Project
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 bg-white/5 text-white font-semibold text-sm rounded-xl hover:bg-white/10 transition-colors"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right - Stats preview */}
            <motion.div variants={fadeInUp} className="hidden lg:block">
              <div className="glass rounded-2xl p-6 border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '200K+', label: 'Trusted Traders', color: '#00c4b4' },
                    { value: '11K', label: 'Monthly Users', color: '#f5a623' },
                    { value: '98%', label: 'Satisfaction Rate', color: '#00c4b4' },
                    { value: '50+', label: 'Trade Categories', color: '#1a3a6b' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/5 rounded-xl p-4 border border-white/5"
                    >
                      <div
                        className="text-2xl font-black font-display"
                        style={{ color: stat.color }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-white/50 text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
