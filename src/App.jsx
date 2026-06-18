import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ScrollAnimator from './components/ScrollAnimator'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-dark-950 text-white relative overflow-hidden">
      <ScrollAnimator />
      <Header onNavClick={scrollToSection} activeSection={activeSection} />
      
      <main className="overflow-hidden relative">
        <section id="home" className="scroll-mt-24 sm:scroll-mt-32">
          <Hero onCTAClick={() => scrollToSection('projetos')} />
        </section>
        
        <section id="sobre" className="scroll-mt-24 sm:scroll-mt-32">
          <About />
        </section>
        
        <section id="projetos" className="scroll-mt-24 sm:scroll-mt-32">
          <Projects />
        </section>
        
        <section id="contato" className="scroll-mt-24 sm:scroll-mt-32">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
