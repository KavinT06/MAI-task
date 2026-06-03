'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/utils'

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61555569370613', label: 'Facebook' },
  { icon: Twitter, href: 'https://x.com/MAI__UK', label: 'X' },
  { icon: Youtube, href: 'https://www.youtube.com/@MAI_UK_', label: 'YouTube' },
  { icon: Instagram, href: 'https://www.instagram.com/mai_uk_/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://in.linkedin.com/company/mai-uk', label: 'LinkedIn' },
]

const companyLinks = [
  { label: 'About Us', href: '/aboutus' },
  { label: 'Careers', href: '/careers' },
  { label: 'CSR', href: '/csr' },
  { label: 'FAQ', href: '/faq' },
]

const platformLinks = [
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'NDA', href: '/nda' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Top - Logo + Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12 pb-12 border-b border-white/10"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00c4b4] to-[#009d8f] flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-sm font-display">M</span>
            </div>
            <span className="text-white font-bold text-xl font-display tracking-wide">MAI</span>
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 pb-12 border-b border-white/10"
        >
          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#00c4b4] text-sm transition-colors duration-200 animated-underline inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Platform
            </h3>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#00c4b4] text-sm transition-colors duration-200 animated-underline inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#00c4b4] mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  1 De La Warr Way, Cambourne, Cambridge CB23 6DX
                </span>
              </li>
              <li>
                <a
                  href="tel:+442080043345"
                  className="flex items-center gap-3 text-white/50 hover:text-[#00c4b4] text-sm transition-colors"
                >
                  <Phone size={16} className="text-[#00c4b4] flex-shrink-0" />
                  +44 208 004 3345
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@myproject.ai"
                  className="flex items-center gap-3 text-white/50 hover:text-[#00c4b4] text-sm transition-colors"
                >
                  <Mail size={16} className="text-[#00c4b4] flex-shrink-0" />
                  info@myproject.ai
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-white/30 text-xs leading-relaxed max-w-3xl mx-auto">
            © 2023 - 2026 MAI Corporation Ltd. MAI Corporation Ltd is a UK-based holding company
            overseeing subsidiaries and affiliated operations across the UK, EU, Asia and Africa.
            Incorporated in England & Wales under Company No. 15469340. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
