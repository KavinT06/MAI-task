'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/utils'

const services = [
  {
    title: 'Sinks',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80',
    color: '#00c4b4',
  },
  {
    title: 'Engineered Stone Installation',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
    color: '#1a3a6b',
  },
  {
    title: 'Natural Stone Installation',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
    color: '#f5a623',
  },
  {
    title: 'Tiling Services',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    color: '#00c4b4',
  },
  {
    title: 'Fire Place Surrounds',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=80',
    color: '#1a3a6b',
  },
  {
    title: 'Cladding',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80',
    color: '#f5a623',
  },
  {
    title: 'Internal Wall Insulation',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80',
    color: '#00c4b4',
  },
  {
    title: 'Stone / Slate Tiling',
    image: 'https://images.unsplash.com/photo-1573297027553-a9af29d1a178?w=400&q=80',
    color: '#1a3a6b',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="services" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <motion.span variants={fadeInUp} className="section-badge">
            Get Any Home Repair Done
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1628] font-display leading-tight"
          >
            Looking For A Service?
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-3 text-gray-500 max-w-xl mx-auto">
            From a dripping tap to a full loft conversion — find the right{' '}
            <Link href="/trader-list" className="text-[#00c4b4] hover:underline font-medium">
              verified tradesperson
            </Link>{' '}
            for any job.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={scaleIn}
              custom={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300">
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent" />

                  {/* Arrow icon on hover */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                </div>

                {/* Title */}
                <div className="p-4 bg-white border-t border-gray-50">
                  <h3 className="text-[#0a1628] font-semibold text-sm leading-tight group-hover:text-[#00c4b4] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <div
                    className="mt-2 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                    style={{ backgroundColor: service.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/services"
              className="btn-teal px-8 py-3.5 text-sm font-bold rounded-xl inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}