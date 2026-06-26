import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Process from './sections/Process'
import Portfolio from './sections/Portfolio'
import WhyChooseUs from './sections/WhyChooseUs'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import CursorGlow from './components/CursorGlow'
import './App.css'

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <Helmet>
        <title>Business WebWorks - Modern Web Development Agency | Website Design & SEO</title>
        <meta name="description" content="Business WebWorks creates modern business websites, portfolio websites, and SEO-driven digital experiences designed to attract customers and build credibility." />
        <meta name="keywords" content="website development, web design, business websites, portfolio websites, SEO services, web development agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="en" />
      </Helmet>

      <CursorGlow position={cursorPosition} />
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <WhyChooseUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Business WebWorks</h3>
            <p>Premium web development and design services for businesses that want to grow online.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: <a href="mailto:businesswebworks@gmail.com">businesswebworks@gmail.com</a></p>
            <p>Phone: <a href="tel:+918639742879">+91 8639742879</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Business WebWorks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default App
