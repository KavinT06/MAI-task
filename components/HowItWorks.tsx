'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const steps = [
  {
    num: 1,
    title: 'Post Your Project',
    description:
      'Start by sharing your project details, add photos, budget, location, and timeline. The more information you provide, the easier it is for the right traders to understand your needs and respond accurately.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&q=80',
  },
  {
    num: 2,
    title: 'Receive Local Proposals',
    description:
      "Once your project is live, verified local traders will review it and send you competitive proposals. You'll start receiving multiple options tailored to your requirements.",
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&q=80',
  },
  {
    num: 3,
    title: 'Compare & Check Credentials',
    description:
      'Go through each proposal, compare pricing, and review trader profiles. Check their certifications, ratings, past work, and experience to make a confident, informed choice.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&q=80',
  },
  {
    num: 4,
    title: 'Finalise & Start the Work',
    description:
      'Select the trader that fits your project best, finalise the details, and get started. Plan the workflow clearly and move forward with confidence knowing you have chosen the right professional.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&q=80',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" ref={ref} className="py-14 lg:py-20 bg-[#f7f9fb]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[#1a5fb5] text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
            SIMPLE PROCESS
          </p>
          <h2 className="text-[#0c1e35] font-black text-3xl sm:text-4xl lg:text-[42px] leading-tight mb-3" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            How To Find Verified Traders
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
            Find trusted professionals in{' '}
            <span className="text-[#1a5fb5]">4 simple steps</span>
          </p>
        </motion.div>

        {/* Steps: 4-column with circular images and connecting line */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-[1px] bg-gray-300 hidden md:block z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle image with step badge */}
                <div className="relative mb-5">
                  <div className="w-[100px] h-[100px] rounded-full overflow-hidden ring-2 ring-white shadow-md bg-gray-200">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-1 -left-1 w-[26px] h-[26px] rounded-full bg-[#1a5fb5] flex items-center justify-center shadow-sm">
                    <span className="text-white text-[11px] font-bold">{step.num}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#0c1e35] font-bold text-base sm:text-lg mb-2 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  {step.description.split(' ').slice(0, 30).join(' ')}
                  {step.description.split(' ').length > 30 && (
                    <span> <span className="text-[#1a5fb5] cursor-pointer hover:underline">right traders</span> to understand your needs and respond accurately.</span>
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            href="/post-a-project"
            className="inline-block px-8 py-3 bg-[#0c1e35] text-white text-sm font-bold rounded-full hover:bg-[#1a3a6b] transition-colors shadow-md"
          >
            Post Your Project Now
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
