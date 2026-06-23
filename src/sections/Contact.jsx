import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    serviceNeeded: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', businessName: '', serviceNeeded: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      label: 'Email',
      value: 'hello@businesswebworks.com',
      link: 'mailto:hello@businesswebworks.com',
      icon: '✉️'
    },
    {
      label: 'Phone',
      value: '+1 (800) 593-9675',
      link: 'tel:+18005939675',
      icon: '📞'
    },
    {
      label: 'WhatsApp',
      value: '+1 (800) 593-9675',
      link: 'https://wa.me/18005939675',
      icon: '💬'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPoint',
            contactType: 'Customer Support',
            telephone: '+1-800-593-9675',
            email: 'hello@businesswebworks.com'
          })}
        </script>
      </Helmet>

      <section id="contact" className="section contact">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2>Get In Touch</h2>
            <p className="section-subtitle">
              Ready to start your project? Contact us for a free consultation
            </p>
          </motion.div>

          <div className="contact-content">
            <motion.div
              className="contact-info-section"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <h3>Contact Information</h3>
              <p>Have questions? We'd love to hear from you. Reach out using any of these methods:</p>

              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    variants={itemVariants}
                    className="contact-method"
                    target={info.label === 'WhatsApp' ? '_blank' : undefined}
                    rel={info.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  >
                    <div className="method-icon">{info.icon}</div>
                    <div className="method-content">
                      <div className="method-label">{info.label}</div>
                      <div className="method-value">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="contact-features">
                <div className="feature">
                  <span className="feature-icon">🚀</span>
                  <p><strong>Fast Response</strong> - We typically respond within 24 hours</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">💡</span>
                  <p><strong>Free Consultation</strong> - Initial consultation is completely free</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">🎯</span>
                  <p><strong>No Obligation</strong> - No pressure, we're here to help</p>
                </div>
              </div>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="businessName">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your business name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="serviceNeeded">Service Needed *</label>
                <select
                  id="serviceNeeded"
                  name="serviceNeeded"
                  value={formData.serviceNeeded}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="website-development">Website Development</option>
                  <option value="portfolio">Portfolio Website</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  rows="5"
                ></textarea>
              </div>

              {submitted && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Thank you! We've received your message and will be in touch soon.
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>

              <p className="form-note">We respect your privacy and never share your information.</p>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
