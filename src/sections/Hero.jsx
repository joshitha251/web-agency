import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import './Hero.css'

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <>
      <Helmet>
        <title>Business WebWorks - Premium Web Development & Design Agency</title>
        <meta name="description" content="Websites that help businesses grow. Business WebWorks creates modern business websites, portfolio websites, and SEO-driven digital experiences." />
      </Helmet>

      <section id="hero" className="hero">
        <div className="hero-background">
          <motion.div className="hero-glow-1" animate={{ y: [-20, 20, -20] }} transition={{ duration: 8, repeat: Infinity }} />
          <motion.div className="hero-glow-2" animate={{ y: [20, -20, 20] }} transition={{ duration: 10, repeat: Infinity }} />
        </div>

        <div className="container hero-container">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="hero-title">
              Websites That Help <span className="gradient-text">Businesses Grow</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-subtitle">
              Business WebWorks creates modern business websites, portfolio websites, and SEO-driven digital experiences designed to attract customers and build credibility.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-buttons">
              <a href="#portfolio" className="btn btn-primary">View Our Work</a>
              <a href="#contact" className="btn btn-secondary">Get Free Consultation</a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-elements"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="floating-card card-1"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="card-content">
                <div className="card-icon">🎨</div>
                <p>Modern Design</p>
              </div>
            </motion.div>

            <motion.div
              className="floating-card card-2"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
            >
              <div className="card-content">
                <div className="card-icon">⚡</div>
                <p>Ultra Fast</p>
              </div>
            </motion.div>

            <motion.div
              className="floating-card card-3"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              <div className="card-content">
                <div className="card-icon">🚀</div>
                <p>SEO Ready</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>
    </>
  )
}

export default Hero
