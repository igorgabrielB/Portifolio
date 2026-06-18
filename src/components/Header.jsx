import React, { useState } from 'react'
import { RiMenuLine, RiCloseLine, RiGithubFill, RiLinkedinBoxFill, RiWhatsappFill } from 'react-icons/ri'

export default function Header({ onNavClick, activeSection }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' },
  ]

  const handleNavClick = (sectionId) => {
    onNavClick(sectionId)
    setIsOpen(false)
  }

  const isActive = (id) => activeSection === id

  return (
    <header className="fixed top-0 w-full bg-dark-950/95 backdrop-blur-md border-b border-primary-700/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer"
          >
            <div className="text-2xl md:text-3xl font-bold">
              <span className="bg-gradient-purple bg-clip-text text-transparent">
                KostaDev
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors duration-300 font-medium ${
                  isActive(item.id)
                    ? 'text-primary-400 border-b-2 border-primary-400'
                    : 'text-gray-400 hover:text-primary-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Icons Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/igorgabrielB?tab=repositories" 
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubFill size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/igorcostadev/" 
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinBoxFill size={20} />
            </a>
            <a 
              href="https://wa.me/5562998470076" 
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiWhatsappFill size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-400 hover:text-primary-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                  isActive(item.id)
                    ? 'bg-primary-700/20 text-primary-400 font-medium'
                    : 'text-gray-400 hover:text-primary-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center space-x-4 px-4 py-2">
              <a href="https://github.com/igorgabrielB" className="text-gray-400 hover:text-primary-400" target="_blank" rel="noopener noreferrer">
                <RiGithubFill size={20} />
              </a>
              <a href="https://www.linkedin.com/in/igorcostadev/" className="text-gray-400 hover:text-primary-400" target="_blank" rel="noopener noreferrer">
                <RiLinkedinBoxFill size={20} />
              </a>
              <a href="https://wa.me/5562998470076" className="text-gray-400 hover:text-primary-400" target="_blank" rel="noopener noreferrer">
                <RiWhatsappFill size={20} />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
