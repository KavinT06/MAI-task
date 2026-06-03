'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, ArrowRight, Tag } from 'lucide-react'
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/utils'

const projects = [
  {
    title: 'Belgian Black or Super Black Honed tiles',
    category: 'Stone Slab Supplier',
    location: 'Edinburgh, Scotland',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80',
    status: 'Active',
    budget: 'Flexible',
  },
  {
    title: 'Kitchen Quartz Worktop Installation',
    category: 'Natural Stone Installation',
    location: 'Manchester, England',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80',
    status: 'Active',
    budget: 'Fixed',
  },
  {
    title: 'Marble Bathroom Wall Cladding',
    category: 'Tiles Supplier',
    location: 'London, England',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&q=80',
    status: 'Active',
    budget: 'Flexible',
  },
  {
    title: 'Granite Fireplace Surround Project',
    category: 'Engineered Stone',
    location: 'Bristol, England',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&q=80',
    status: 'Active',
    budget: 'Negotiable',
  },
  {
    title: 'Porcelain Floor Tiling 85m²',
    category: 'Tiling Services',
    location: 'Leeds, England',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80',
    status: 'Active',
    budget: 'Fixed',
  },
]

export default function ProjectsGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#f0f5fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4"
        >
          <div>
            <motion.span variants={fadeInUp} className="section-badge">
              Real Work, Real Results
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1628] font-display leading-tight"
            >
              Explore Real UK Projects
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-3 text-gray-500 max-w-lg">
              From loft conversions in Leeds to boiler installs in Bristol.
            </motion.p>
          </div>
          <motion.div variants={fadeInUp}>
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-teal px-6 py-3 text-sm font-bold rounded-xl inline-flex items-center gap-2 whitespace-nowrap"
            >
              Explore Projects
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Horizontal Scroll Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={scaleIn}
              custom={index}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group cursor-pointer flex-shrink-0 w-[300px] sm:w-[320px]"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100">
                {/* Image */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-semibold backdrop-blur-sm">
                      {project.status}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#0a1628] text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-[#0a1628] font-semibold text-sm leading-snug mb-3 group-hover:text-[#00c4b4] transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <MapPin size={12} />
                      <span>{project.location}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[#1a3a6b] text-xs font-medium">
                      {project.budget}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
