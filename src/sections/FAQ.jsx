import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What is included in your website development service?',
      answer: 'Our website development service includes discovery and strategy, modern responsive design, clean code development, SEO optimization, performance optimization, and launch support. We build custom websites tailored to your business needs.'
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'Typical website projects take 4-8 weeks depending on complexity. Simple websites can be completed in 4 weeks, while more complex projects with custom features may take 8-12 weeks. We provide a detailed timeline during the initial consultation.'
    },
    {
      question: 'Do you offer SEO services?',
      answer: 'Yes! SEO is built into every website we develop. We offer comprehensive SEO services including on-page optimization, technical SEO, keyword research, content strategy, and ongoing optimization to help you rank higher in search results.'
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Absolutely! We specialize in website redesigns. We analyze your current site, understand your goals, and create a modernized version with improved design, performance, user experience, and SEO.'
    },
    {
      question: 'What about ongoing maintenance and support?',
      answer: 'We offer ongoing support and maintenance packages including regular updates, security monitoring, performance optimization, content updates, and technical support to ensure your website stays current and secure.'
    },
    {
      question: 'How much does a website cost?',
      answer: 'Website costs vary based on complexity and features. Simple business websites start at $2,500, while more complex projects range from $5,000-$15,000+. We provide custom quotes after understanding your specific requirements.'
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Yes! Every website we build is mobile-first responsive. We design and test for all devices - mobile, tablet, and desktop - to ensure a perfect user experience everywhere.'
    },
    {
      question: 'Do you provide analytics and reporting?',
      answer: 'Yes! We set up Google Analytics and other tracking tools on your website. We provide regular performance reports showing visitor metrics, user behavior, and conversion data to help you understand your website\'s performance.'
    }
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
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <section id="faq" className="section faq">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2>Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our services and process
            </p>
          </motion.div>

          <motion.div
            className="faq-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="faq-item"
              >
                <AccordionItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <button className="accordion-header" onClick={onClick} aria-expanded={isOpen}>
        <span className="question-text">{question}</span>
        <motion.div
          className="accordion-icon"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 14l-7-7-7 7" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="accordion-content">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FAQ
