'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: 1,
    title: 'Post Your Project',
    description: 'Describe what you need, add dimensions, set your budget.',
    color: '#d0d8f0',
    textColor: '#1a3a6b',
  },
  {
    num: 2,
    title: 'Get Matched Instantly',
    description: 'MAI finds sellers with matching offcuts in the UK.',
    color: '#f0d0d8',
    textColor: '#8b1a3a',
  },
  {
    num: 3,
    title: 'Buy Safely & Save',
    description: 'Secure payment, verified sellers, up to 70% cheaper.',
    color: '#f8e8c0',
    textColor: '#8b5e1a',
  },
]

export default function StoneOffcuts() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [budget, setBudget] = useState(300)
  const [stoneType, setStoneType] = useState('')
  const [projectTitle, setProjectTitle] = useState('')
  const [description, setDescription] = useState('')

  const minBudget = 300
  const maxBudget = 25000
  const percentage = ((budget - minBudget) / (maxBudget - minBudget)) * 100

  return (
    <section ref={ref} className="py-0 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[600px]">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="px-8 lg:px-16 py-14 lg:py-20 flex flex-col justify-center border-r border-gray-100"
          >
            <p className="text-[#1a5fb5] text-[11px] font-bold tracking-[0.25em] uppercase mb-4">
              STONE OFFCUTS MARKETPLACE
            </p>
            <h2 className="text-[#0c1e35] font-black text-2xl sm:text-3xl lg:text-[34px] leading-tight mb-4" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              Submit Your Project. Let MAI Find Your Perfect Stone.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
              Discover discounted stone offcuts on MAI, connecting you with verified UK sellers for secure, budget-friendly options.
            </p>

            {/* Steps */}
            <div className="space-y-5">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm"
                    style={{ backgroundColor: step.color, color: step.textColor }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <p className="text-[#0c1e35] font-bold text-[14px]">{step.title}</p>
                    <p className="text-gray-500 text-[13px] mt-0.5 leading-snug">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="px-8 lg:px-16 py-14 lg:py-20 flex flex-col justify-center bg-white"
          >
            <h3 className="text-[#0c1e35] font-black text-2xl sm:text-3xl lg:text-[30px] mb-2" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              Find Your Perfect Stone Offcut
            </h3>
            <p className="text-gray-500 text-sm mb-7">
              Set your offcut budget and MAI does the rest
            </p>

            {/* Form */}
            <div className="space-y-5">
              {/* Row 1: Project title + Stone type */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#0c1e35]/70 tracking-widest uppercase mb-2">
                    PROJECT TITLE
                  </label>
                  <input
                    type="text"
                    placeholder="Enter project name"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#1a5fb5]/30 focus:border-[#1a5fb5] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#0c1e35]/70 tracking-widest uppercase mb-2">
                    STONE TYPE
                  </label>
                  <select
                    value={stoneType}
                    onChange={(e) => setStoneType(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-[#1a5fb5]/30 focus:border-[#1a5fb5] transition-all appearance-none bg-white"
                  >
                    <option value="">Select stone type</option>
                    <option>Granite</option>
                    <option>Marble</option>
                    <option>Quartz</option>
                    <option>Limestone</option>
                    <option>Slate</option>
                  </select>
                </div>
              </div>

              {/* Project description */}
              <div>
                <label className="block text-[10px] font-bold text-[#0c1e35]/70 tracking-widest uppercase mb-2">
                  PROJECT DESCRIPTION
                </label>
                <textarea
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#1a5fb5]/30 focus:border-[#1a5fb5] transition-all resize-none"
                />
              </div>

              {/* Budget range */}
              <div>
                <p className="text-[#0c1e35] font-bold text-sm mb-3">Budget Range</p>
                <div className="flex justify-between text-[12px] text-gray-500 mb-2">
                  <span>£300 (minimum)</span>
                  <span>£25,000 (maximum)</span>
                </div>
                <input
                  type="range"
                  min={minBudget}
                  max={maxBudget}
                  step={100}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #0c1e35 ${percentage}%, #e2e8f0 ${percentage}%)`,
                  }}
                />
                <div className="flex justify-center mt-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#0c1e35] font-black text-3xl">£</span>
                    <span className="text-[#0c1e35] font-black text-4xl underline decoration-[#0c1e35]">
                      {budget.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <button className="w-full py-4 bg-[#d0d8e8] text-[#0c1e35] text-sm font-bold rounded-xl hover:bg-[#b8c4d8] transition-colors">
                Post Your Stones Project Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
