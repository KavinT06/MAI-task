'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    name: 'Athikur Rahman',
    location: 'Birmingham',
    text: 'Excellent service from start to finish. The quartz worktop quality is outstanding and the fitting was done perfectly. Very clean and professional work. Highly recommended!',
    highlighted: true,
  },
  {
    name: 'B.S. Uberai',
    location: 'London',
    text: "Brilliant Stone, polished to perfection. While we had some challenges with the delivery of the stone & cuts, the aftersales service was also fantastic thanks to Mr. Kumar!",
    highlighted: false,
  },
  {
    name: 'James',
    location: 'Leeds',
    text: 'Great service from start to finish. Very responsive and helpful. They have a huge range of product and are very good at understanding what you are looking for and helping you find it.',
    highlighted: false,
  },
  {
    name: 'Ricardo Angelo Marcella',
    location: 'Manchester',
    text: 'Excellent service from start to finish. Quick turnaround and my quartz worktops are now fitted and look incredible.',
    highlighted: false,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-14 lg:py-20 overflow-hidden">
      {/* Background image: woman smiling */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80"
          alt="Happy customer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0c1e35]/70" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-start">

          {/* Left: Title text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="pt-2"
          >
            <p className="text-[#F0A500] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">
              WHAT PEOPLE SAY
            </p>
            <h2 className="text-white font-black text-3xl sm:text-4xl leading-tight mb-4" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              The Proof Is In The Pudding
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Tradespeople are winning, homeowners are relieved. Don't take our word for it, here's what real MAI users across the UK have to say.
            </p>
          </motion.div>

          {/* Right: 2x2 grid of white cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className={`bg-white rounded-2xl p-5 lg:p-6 shadow-xl ${
                  t.highlighted ? 'ring-2 ring-[#1a5fb5]' : ''
                }`}
              >
                {/* Big quote marks */}
                <div className="text-[#1a5fb5] font-serif text-3xl font-black leading-none mb-3 select-none">&ldquo;&rdquo;</div>

                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                  {t.text}
                </p>

                {/* Author */}
                <div>
                  <p className="text-[#0c1e35] font-bold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
