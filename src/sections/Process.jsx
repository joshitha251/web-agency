import React from 'react'
import { motion } from 'framer-motion'
import './Process.css'

function Process() {
  const steps = [
    {
      number: 1,
      title: 'Discovery',
      description: 'We understand your business, goals, and target audience through in-depth consultation and research.'
    },
    {
      number: 2,
      title: 'Design',
      description: 'Our team creates modern, user-friendly designs that reflect your brand and engage your audience.'
    },
    {
      number: 3,
      title: 'Development',
      description: 'We build your website with clean code, optimal performance, and modern best practices.'
    },
    {
      number: 4,
      title: 'Launch',
      description: 'Your website goes live with full SEO optimization, testing, and support to ensure success.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="process" className="section process">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Our Process</h2>
          <p className="section-subtitle">
            A proven, professional approach to delivering exceptional results
          </p>
        </motion.div>

        <motion.div
          className="process-steps"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <motion.div variants={itemVariants} className="process-step">
                <div className="step-number">
                  <div className="number-circle">{step.number}</div>
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  className="step-connector"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  viewport={{ once: true, margin: '-100px' }}
                />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div
          className="process-timeline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <svg viewBox="0 0 1000 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0, 255, 136, 0.2)" />
                <stop offset="50%" stopColor="rgba(0, 255, 136, 0.4)" />
                <stop offset="100%" stopColor="rgba(0, 255, 136, 0.2)" />
              </linearGradient>
            </defs>
            <line x1="0" y1="40" x2="1000" y2="40" stroke="url(#timelineGradient)" strokeWidth="2" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
