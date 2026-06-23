import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './WhyChooseUs.css'

function AnimatedCounter({ target, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return

    let startTime = null
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      setCount(Math.floor(progress * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, target, duration])

  return <span ref={ref}>{count}+</span>
}

function WhyChooseUs() {
  const benefits = [
    {
      title: 'Fast-Loading Websites',
      description: 'Optimized performance ensures your website loads quickly on all devices and connections.'
    },
    {
      title: 'Mobile-First Design',
      description: 'Every website is designed and tested for perfect functionality on mobile, tablet, and desktop.'
    },
    {
      title: 'SEO-Focused Development',
      description: 'Built with search engine optimization from the ground up to help you rank higher and attract more customers.'
    },
    {
      title: 'Modern UI/UX',
      description: 'Beautiful, intuitive interfaces that keep visitors engaged and guide them toward taking action.'
    },
    {
      title: 'Ongoing Support',
      description: 'We provide continuous support, maintenance, and optimization to ensure your website stays current.'
    }
  ]

  const stats = [
    { number: 150, label: 'Projects Completed', duration: 2.5 },
    { number: 100, label: 'Responsive Design', suffix: '%', duration: 2 },
    { number: 100, label: 'Client Focused', suffix: '%', duration: 2 }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="why-choose" className="section why-choose-us">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Why Choose Business WebWorks</h2>
          <p className="section-subtitle">
            We combine technical expertise with creative excellence to deliver outstanding results
          </p>
        </motion.div>

        <motion.div
          className="benefits-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants} className="benefit-card">
              <div className="benefit-icon">✓</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="stats-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="stat-number">
                  <AnimatedCounter target={stat.number} duration={stat.duration} />
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
