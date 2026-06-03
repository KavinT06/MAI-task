'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Mai Awards', href: '/awards' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00c4b4] to-[#009d8f] flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-sm font-display">M</span>
                </div>
                <span className={`font-bold text-xl font-display tracking-wide transition-colors duration-300 ${scrolled ? 'text-[#0a1628]' : 'text-white'}`}>MAI</span>
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    scrolled
                      ? 'text-gray-600 hover:text-[#0a1628] hover:bg-gray-50'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/post-a-project"
                className={`text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-600 hover:text-[#0a1628]' : 'text-white/70 hover:text-white'
                }`}
              >
                Post a Project
              </Link>
              <div className={`w-px h-5 ${scrolled ? 'bg-gray-200' : 'bg-white/20'}`} />
              <Link
                href="/projects"
                className={`text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-600 hover:text-[#0a1628]' : 'text-white/70 hover:text-white'
                }`}
              >
                Send Proposals
              </Link>
              <div className={`w-px h-5 ${scrolled ? 'bg-gray-200' : 'bg-white/20'}`} />
              <Link
                href="#"
                className={`text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-600 hover:text-[#0a1628]' : 'text-white/80 hover:text-white'
                }`}
              >
                Sign In
              </Link>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="#"
                  className="btn-teal px-5 py-2.5 text-sm rounded-xl inline-flex items-center gap-2"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? 'text-[#0a1628] hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-xl"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-4 py-3 text-gray-700 hover:text-[#0a1628] hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 pb-2 space-y-2">
                  <Link
                    href="/post-a-project"
                    className="block w-full text-center px-4 py-3 text-gray-600 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    Post a Project
                  </Link>
                  <Link
                    href="#"
                    className="block w-full text-center px-4 py-3 text-gray-600 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="#"
                    className="btn-teal block w-full text-center px-4 py-3 text-sm rounded-xl"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}