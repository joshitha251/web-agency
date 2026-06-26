import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Portfolio.css'

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Bean & Brew Cafe',
      description: 'Modern cafe website with online table booking functionality, menu showcase, and customer reviews.',
      image: '🧋',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://bean-and-brew-ten.vercel.app/',
      metrics: 'Increased reservations by 45%'
    },
    {
      id: 2,
      title: 'ForgeFit Gym',
      description: 'Premium fitness website focused on membership conversion with class schedules, trainer profiles, and booking system.',
      image: '💪🏻',
      technologies: ['React', 'Firebase', 'Stripe'],
      link: 'https://forge-fitness-mauve.vercel.app/',
      metrics: 'Converted 3x more members'
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      description: 'Professional portfolio website showcasing projects, skills, experience, and contact information for creative professionals.',
      image: '🎯',
      technologies: ['React', 'Framer Motion', 'Vercel'],
      link: 'https://freelance-portfolio-alpha-flame.vercel.app/',
      metrics: 'Doubled client inquiries'
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Our Portfolio</h2>
          <p className="section-subtitle">
            Showcasing successful projects built with expertise and attention to detail
          </p>
        </motion.div>

        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function PortfolioCard({ project, variants }) {
  const cardRef = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientY - rect.top) / rect.height - 0.5
    const y = (e.clientX - rect.left) / rect.width - 0.5

    setRotateX(x * 20)
    setRotateY(y * -20)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      className="portfolio-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        perspective: '1200px'
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="card-image">{project.image}</div>

      <div className="card-body">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-metrics">
          <span className="metric-badge">{project.metrics}</span>
        </div>

        <div className="technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        <motion.a
          href={project.link}
          className="project-link"
          whileHover={{ x: 4 }}
        >
          View Project
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 10h10m-4-4l4 4-4 4" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  )
}

export default Portfolio
