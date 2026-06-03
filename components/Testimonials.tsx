'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote, MapPin } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/utils'

const testimonials = [
  {
    name: 'Athikur Rahman',
    location: 'Birmingham',
    rating: 5,
    text: 'Excellent service from start to finish. The quartz worktop quality is outstanding and the fitting was done perfectly. Very clean and professional work. Highly recommended!',
    initials: 'AR',
    color: '#00c4b4',
  },
  {
    name: 'B.S. Uberai',
    location: 'London',
    rating: 5,
    text: 'Brilliant Stone, polished to perfection. While we had some challenges with the delivery of the stone & cuts, the aftersales service was also fantastic thanks to Mr. Kumar!',
    initials: 'BU',
    color: '#1a3a6b',
  },
  {
    name: 'James',
    location: 'Leeds',
    rating: 5,
    text: 'Great service from start to finish. Very responsive and helpful. They have a huge range of product and are very good at understanding what you are looking for and helping you find it.',
    initials: 'JL',
    color: '#f5a623',
  },
  {
    name: 'Ricardo Angelo Marcella',
    location: 'Manchester',
    rating: 5,
    text: 'Excellent service from start to finish. Quick turnaround and my quartz worktops are now fitted and look incredible.',
    initials: 'RM',
    color: '#00c4b4',
  },
]

export default function Testimonials() {
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
            What People Say
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1628] font-display leading-tight"
          >
            The Proof Is In The Pudding
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Tradespeople are winning, homeowners are relieved. Don&apos;t take our word for it —
            here&apos;s what real MAI users across the UK have to say.
          </motion.p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-5">
                <Quote size={40} style={{ color: testimonial.color }} />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm"
                  style={{ backgroundColor: testimonial.color }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-[#0a1628] font-semibold text-sm">{testimonial.name}</p>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <MapPin size={10} />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 100%, ${testimonial.color}, transparent 60%)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
