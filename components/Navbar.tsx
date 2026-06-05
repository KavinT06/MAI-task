'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Search, Plus, Send, Award } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '#how-it-works', hasDropdown: true },
  { label: 'Projects', href: '/projects' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Mai Awards', href: '/awards' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* TOP BAR: Logo (left) | Search (center) | Sign In (right) */}
        <div className="bg-[#0c1e35]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-[72px] gap-6">

              {/* Logo */}
              <Link href="/" className="flex flex-col items-start flex-shrink-0">
                <span className="text-white font-black text-[32px] leading-none tracking-tight" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  MAI
                  <sup className="text-white text-[10px] align-super ml-0.5">®</sup>
                </span>
                <span className="text-white/50 text-[9px] tracking-[0.15em] uppercase leading-none mt-0.5">We Build Homes</span>
              </Link>

              {/* Search Bar - Center, always visible */}
              <div className="hidden md:flex flex-1 max-w-[500px] mx-auto">
                <div className="flex items-center bg-white rounded-full w-full px-5 py-2.5 shadow-sm">
                  <input
                    type="text"
                    placeholder="Search Here"
                    className="flex-1 text-sm text-gray-600 placeholder:text-gray-400 outline-none bg-transparent"
                  />
                  <Search size={18} className="text-gray-400 flex-shrink-0 ml-2" />
                </div>
              </div>

              {/* Sign In */}
              <div className="hidden md:flex items-center gap-2 flex-shrink-0">
                <button className="flex items-center gap-2 text-white text-sm font-medium bg-[#1a3a6b]/60 hover:bg-[#1a3a6b]/80 rounded-full px-4 py-2 transition-colors border border-white/10">
                  <div className="w-7 h-7 rounded-full bg-[#1a5fb5] flex items-center justify-center overflow-hidden">
                    <span className="text-white text-xs">👤</span>
                  </div>
                  <span>Sign In</span>
                  <ChevronDown size={14} className="text-white/60" />
                </button>
              </div>

              {/* Mobile toggle */}
              <button
                className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: Nav links (left) | CTA buttons (right) */}
        <div className="bg-[#c8d4df] border-t border-[#b0bec5]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="hidden md:flex items-center justify-between h-[44px]">

              {/* Left nav links */}
              <div className="flex items-center gap-0">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-1.5 text-[13px] font-medium text-[#0c1e35] hover:text-[#1a3a6b] transition-colors"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={13} className="text-[#0c1e35]/60" />}
                  </Link>
                ))}
              </div>

              {/* Right CTA buttons with separators */}
              <div className="flex items-center">
                <Link
                  href="/post-a-project"
                  className="flex items-center gap-2 px-5 py-1 text-[12px] font-bold text-[#0c1e35] hover:text-[#1a3a6b] transition-colors tracking-wide border-r border-[#a0adb8] pr-5"
                >
                  <Plus size={13} className="text-[#0c1e35]/70" />
                  POST A PROJECT
                </Link>
                <Link
                  href="/projects"
                  className="flex items-center gap-2 px-5 py-1 text-[12px] font-bold text-[#0c1e35] hover:text-[#1a3a6b] transition-colors tracking-wide border-r border-[#a0adb8] pr-5"
                >
                  <Send size={13} className="text-[#0c1e35]/70" />
                  SEND PROPOSALS
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 px-5 py-1 text-[12px] font-bold text-[#0c1e35] hover:text-[#1a3a6b] transition-colors tracking-wide"
                >
                  <Award size={13} className="text-[#0c1e35]/70" />
                  APPLY INTERNSHIP
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-[#0c1e35] border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-1">
                {/* Mobile Search */}
                <div className="flex items-center bg-white rounded-full px-4 py-2.5 mb-4">
                  <input type="text" placeholder="Search Here" className="flex-1 text-sm text-gray-600 placeholder:text-gray-400 outline-none bg-transparent" />
                  <Search size={16} className="text-gray-400" />
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-3 text-white/80 hover:text-white text-sm font-medium hover:bg-white/5 rounded-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 border-t border-white/10 space-y-1">
                  {[
                    { label: 'POST A PROJECT', href: '/post-a-project' },
                    { label: 'SEND PROPOSALS', href: '/projects' },
                    { label: 'APPLY INTERNSHIP', href: '#' },
                  ].map((cta) => (
                    <Link
                      key={cta.label}
                      href={cta.href}
                      className="block px-4 py-2.5 text-white/60 hover:text-white text-xs font-bold tracking-wide"
                      onClick={() => setMobileOpen(false)}
                    >
                      {cta.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-[116px]" />
    </>
  )
}