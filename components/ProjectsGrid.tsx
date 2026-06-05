'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    category: 'STONE SLAB SUPPLIER',
    title: 'Belgian Black or Super Black...',
    location: 'Edinburgh Scotland',
    budget: 'Flexible',
    image: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=600&q=80',
    status: 'Active',
  },
  {
    category: 'NATURAL STONE INSTALLATION',
    title: 'Bespoke Flamed Granite...',
    location: 'Greater London -England',
    budget: 'Flexible',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    status: 'Active',
  },
  {
    category: 'NATURAL STONE INSTALLATION',
    title: 'Saint anne marble hearth...',
    location: 'Leicestershire -England',
    budget: 'Flexible',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    status: 'Active',
  },
  {
    category: 'TILES SUPPLIER',
    title: 'Large format tiles - 110 m2',
    location: 'Greater London -England',
    budget: 'Flexible',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    status: 'Active',
  },
]

export default function ProjectsGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-[#f0f4f8]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header row */}
        <div className="flex items-start justify-between mb-10 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#1a5fb5] text-[11px] font-bold tracking-[0.25em] uppercase mb-2">
              REAL WORK, REAL RESULTS
            </p>
            <h2 className="text-[#0c1e35] font-black text-3xl sm:text-4xl lg:text-[42px] leading-tight mb-2" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              Explore Real UK Projects
            </h2>
            <p className="text-gray-500 text-sm">
              From loft conversions in Leeds to boiler installs in{' '}
              <span className="text-[#1a5fb5]">Bristol.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex-shrink-0"
          >
            <Link
              href="/projects"
              className="inline-block px-6 py-2.5 bg-[#0c1e35] text-white text-sm font-semibold rounded-full hover:bg-[#1a3a6b] transition-colors shadow-md whitespace-nowrap"
            >
              Explore Projects
            </Link>
          </motion.div>
        </div>

        {/* 4-column project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              {/* Project image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Active badge */}
                <div className="absolute top-3 right-3">
                  <span className="flex items-center gap-1.5 bg-[#0c4a2a] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Card info */}
              <div className="p-4">
                <p className="text-[#1a5fb5] text-[10px] font-bold tracking-wide uppercase mb-1">
                  {project.category}
                </p>
                <h3 className="text-[#0c1e35] font-bold text-[15px] mb-3 leading-tight">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-gray-400 flex-shrink-0" />
                    <span className="text-gray-500 text-[12px]">{project.location}</span>
                  </div>
                  <span className="text-green-600 font-bold text-[12px]">{project.budget}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
