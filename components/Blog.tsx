'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link'
import { staggerContainer, fadeInUp } from '@/lib/utils'

const blogs = [
  {
    title: 'Window Sill Replacement: Costs, Mistakes & Best Options in the UK',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    href: '/blogs/window-sill-replacement',
    date: 'May 2026',
    readTime: '8 min read',
  },
  {
    title: 'How to Detect and Fix Window Sill Installation Errors?',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    href: '/blogs/window-sill-installation-errors',
    date: 'Apr 2026',
    readTime: '6 min read',
  },
  {
    title: 'How to Become a Plumber in the UK? Latest Guide',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80',
    href: '/blogs/how-to-become-a-plumber',
    date: 'Apr 2026',
    readTime: '10 min read',
  },
  {
    title: 'Stone Sill Care: Essential Maintenance Tips for Homeowners',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    href: '/blogs/stone-sill-care',
    date: 'Mar 2026',
    readTime: '5 min read',
  },
  {
    title: 'Window Sill Decor: Creative Ideas for Every Room',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
    href: '/blogs/window-sill-decor',
    date: 'Mar 2026',
    readTime: '7 min read',
  },
  {
    title: 'Dishwasher Installation Cost: Complete UK Price Guide',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    href: '/blogs/dishwasher-installation-cost',
    date: 'Feb 2026',
    readTime: '6 min read',
  },
]

export default function Blog() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // Split blogs into 3 columns for masonry-like layout
  const col1 = [blogs[0], blogs[3]]
  const col2 = [blogs[1], blogs[4]]
  const col3 = [blogs[2], blogs[5]]

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#f0f5fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="section-badge">
            Knowledge Hub
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1628] font-display leading-tight"
          >
            Latest Blog
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Our articles cover a range of topics to help you stay informed and make better decisions.
            Dive into expert advice and stay ahead in the industry.
          </motion.p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Column 1 */}
          <div className="space-y-6">
            {col1.map((blog, i) => (
              <BlogCard key={blog.title} blog={blog} index={i} />
            ))}
          </div>

          {/* Column 2 - offset down */}
          <div className="space-y-6 md:mt-10">
            {col2.map((blog, i) => (
              <BlogCard key={blog.title} blog={blog} index={i + 2} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            {col3.map((blog, i) => (
              <BlogCard key={blog.title} blog={blog} index={i + 4} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function BlogCard({ blog, index }: { blog: (typeof blogs)[0]; index: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group cursor-pointer"
    >
      <Link href={blog.href}>
        <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100">
          {/* Image */}
          <div className="aspect-[16/10] relative overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-[#0a1628]/20 to-transparent" />

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2">
                {blog.title}
              </h3>
            </div>
          </div>

          {/* Meta */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-gray-400 text-xs">
              <Clock size={12} />
              <span>{blog.readTime}</span>
            </div>
            <span className="text-gray-400 text-xs">{blog.date}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
