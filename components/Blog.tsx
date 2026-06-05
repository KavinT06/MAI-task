'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const blogPosts = [
  {
    title: 'Window Sill\nReplacement',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    href: '/blogs/window-sill-replacement',
    titleSize: 'large',
  },
  {
    title: 'WINDOW SILL INSTALLATION ERRORS',
    subtitle: 'How To Detect And Fix Window Sill Installation...',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    href: '/blogs/window-sill-installation-errors',
    titleSize: 'normal',
  },
  {
    title: 'HOW TO BECOME A PLUMBER',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80',
    href: '/blogs/how-to-become-a-plumber',
    titleSize: 'normal',
  },
  {
    title: 'Stone\nSill Care',
    image: 'https://images.unsplash.com/photo-1509822929063-6b6723e0f9dd?w=600&q=80',
    href: '/blogs/stone-sill-care',
    titleSize: 'large',
  },
  {
    title: 'WINDOW SILL\nDECOR',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    href: '/blogs/window-sill-decor',
    titleSize: 'normal',
  },
  {
    title: 'DISHWASHER\nINSTALLATION\nCOST',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    href: '/blogs/dishwasher-installation-cost',
    titleSize: 'normal',
  },
]

export default function Blog() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-12 lg:py-16 bg-[#f0f4f8]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <h2 className="text-[#0c1e35] font-black text-3xl sm:text-4xl lg:text-[42px]" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            Latest Blog
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-3xl mx-auto mt-3 leading-relaxed">
            Our articles cover a range of topics to help you stay informed and make better decisions. Dive into expert advice and stay ahead in the industry with our engaging and informative content.
          </p>
        </motion.div>

        {/* Blog Grid: exact 3-column layout matching original */}
        {/* Row 1: 3 equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {blogPosts.slice(0, 3).map((post, i) => (
            <BlogCard key={post.href} post={post} index={i} inView={inView} />
          ))}
        </div>
        {/* Row 2: 3 equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {blogPosts.slice(3, 6).map((post, i) => (
            <BlogCard key={post.href} post={post} index={i + 3} inView={inView} />
          ))}
        </div>

        {/* View All Blogs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <a
            href="/blogs"
            className="inline-block px-8 py-3 bg-[#0c1e35] text-white text-sm font-semibold rounded-full hover:bg-[#1a3a6b] transition-colors shadow-md"
          >
            View All Blogs
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function BlogCard({ post, index, inView }: { post: (typeof blogPosts)[0]; index: number; inView: boolean }) {
  return (
    <motion.a
      href={post.href}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.07 }}
      className="relative block rounded-xl overflow-hidden group cursor-pointer"
      style={{ aspectRatio: '4/3' }}
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-bold text-sm sm:text-base leading-tight whitespace-pre-line">
          {post.title}
        </h3>
        {post.subtitle && (
          <p className="text-white/70 text-xs mt-1 leading-snug">{post.subtitle}</p>
        )}
      </div>
    </motion.a>
  )
}
