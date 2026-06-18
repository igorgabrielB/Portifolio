import React from 'react'
import { RiGithubFill, RiLinkedinBoxFill, RiMailOpenLine, RiWhatsappFill } from 'react-icons/ri'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: RiGithubFill, href: 'https://github.com/igorgabrielB?tab=repositories', label: 'GitHub' },
    { icon: RiLinkedinBoxFill, href: 'https://www.linkedin.com/in/igorcostadev/', label: 'LinkedIn' },
    { icon: RiMailOpenLine, href: 'mailto:igor012gabriel@gmail.com', label: 'Email' },
    { icon: RiWhatsappFill, href: 'https://wa.me/5562998470076', label: 'WhatsApp' },
  ]

  return (
    <footer className="bg-gradient-to-t from-dark-950 to-dark-900 border-t border-primary-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-purple bg-clip-text text-transparent">
                KostaDev
              </span>
            </h3>
            <p className="text-gray-400">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-300">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Home', 'Sobre', 'Projetos', 'Contato'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-300">Redes Sociais</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-primary-700/20 flex items-center justify-center text-primary-400 hover:bg-primary-700/40 hover:text-primary-300 transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-primary-700/0 via-primary-700/30 to-primary-700/0 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © {currentYear} Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Desenvolvido com <span className="text-primary-400">❤️</span> usando React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
