import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import './Services.css'

function Services() {
  const services = [
    {
      id: 1,
      title: 'Website Development',
      description: 'Custom-built websites with clean code, fast performance, and modern design patterns to help your business establish a strong online presence.',
      icon: '💻',
      keywords: ['React', 'Performance', 'Responsive']
    },
    {
      id: 2,
      title: 'Portfolio Websites',
      description: 'Professional portfolio sites that showcase your work and skills. Perfect for creatives, freelancers, and professionals looking to attract clients.',
      icon: '🎨',
      keywords: ['Portfolio', 'Showcase', 'Professional']
    },
    {
      id: 3,
      title: 'SEO Optimization',
      description: 'Complete SEO services including on-page optimization, technical SEO, and content strategy to improve your search engine rankings and drive traffic.',
      icon: '🎯',
      keywords: ['SEO', 'Ranking', 'Traffic']
    },
    {
      id: 4,
      title: 'Website Redesign',
      description: 'Modernize your existing website with updated design, improved performance, and enhanced user experience to better serve your visitors.',
      icon: '✨',
      keywords: ['Redesign', 'Modernize', 'UX']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <>
      <Helmet>
        <meta name="description" content="Business WebWorks services: website development, portfolio websites, SEO optimization, and website redesign for local businesses." />
      </Helmet>

      <section id="services" className="section services">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2>Our Services</h2>
            <p className="section-subtitle">
              Comprehensive web solutions tailored to help your business succeed online
            </p>
          </motion.div>

          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="service-card"
              >
                <div className="card-header">
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-tags">
                  {service.keywords.map((keyword) => (
                    <span key={keyword} className="tag">{keyword}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services
