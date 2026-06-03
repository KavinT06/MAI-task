'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Upload, FileText, CheckCircle, Rocket } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/utils'

const steps = [
  {
    icon: Upload,
    number: '01',
    title: 'Post Your Project',
    description:
      'Start by sharing your project details, add photos, budget, location, and timeline. The more information you provide, the easier it is for the right traders to understand your needs and respond accurately.',
    color: '#00c4b4',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Receive Local Proposals',
    description:
      "Once your project is live, verified local traders will review it and send you competitive proposals. You'll start receiving multiple options tailored to your requirements.",
    color: '#1a3a6b',
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Compare & Check Credentials',
    description:
      'Go through each proposal, compare pricing, and review trader profiles. Check their certifications, ratings, past work, and experience to make a confident, informed choice.',
    color: '#f5a623',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Finalise & Start the Work',
    description:
      "Select the trader that fits your project best, finalise the details, and get started. Plan the workflow clearly and move forward with confidence knowing you've chosen the right professional.",
    color: '#00c4b4',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="how-it-works" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="section-badge">
            Simple Process
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1628] font-display leading-tight"
          >
            How To Find Verified Traders
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
            Find trusted professionals in 4 simple steps
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connection line (desktop only) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#00c4b4]/30 via-[#1a3a6b]/30 to-[#00c4b4]/30" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              custom={index}
              className="relative group"
            >
              <div className="text-center">
                {/* Number Circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="relative mx-auto mb-6 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg z-10"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                  }}
                >
                  <step.icon size={32} className="text-white" />
                  <div
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center text-xs font-bold"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </div>
                </motion.div>

                {/* Text */}
                <h3 className="text-lg font-bold text-[#0a1628] font-display mb-3 group-hover:text-[#00c4b4] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
