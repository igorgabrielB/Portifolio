import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import Button from '../components/Button'
import { RiMailOpenLine, RiWhatsappFill, RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const contactMethods = [
    {
      icon: RiMailOpenLine,
      title: 'Email',
      value: 'igor012gabriel@gmail.com',
      link: 'mailto:igor012gabriel@gmail.com',
    },
    {
      icon: RiWhatsappFill,
      title: 'WhatsApp',
      value: 'Chama no WhatsApp',
      link: 'https://wa.me/5562998470076',
    },
    {
      icon: RiLinkedinBoxFill,
      title: 'LinkedIn',
      value: 'KostaDev no linkedIn',
      link: 'https://www.linkedin.com/in/igorcostadev/',
    },
    {
      icon: RiGithubFill,
      title: 'GitHub',
      value: 'KostaDev no github',
      link: 'https://github.com/igorgabrielB?tab=repositories',
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Vamos Conversar"
          subtitle="Tenho interesse em ouvir sobre seu projeto ou oportunidade"
        />

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactMethods.map((method, idx) => {
            const Icon = method.icon
            return (
              <motion.a
                key={idx}
                href={method.link}
                variants={itemVariants}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="text-center cursor-pointer">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary-700/20 rounded-full">
                      <Icon className="text-primary-400 text-2xl" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    {method.title}
                  </h4>
                  <p className="text-sm text-gray-400 break-all">
                    {method.value}
                  </p>
                </Card>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card>
            <h3 className="text-2xl font-bold mb-6 text-white">
              Envie uma Mensagem
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary-700/20 border border-primary-500/50 rounded-lg p-6 text-center"
              >
                <p className="text-primary-300 font-semibold">
                  ✓ Mensagem enviada com sucesso!
                </p>
                <p className="text-gray-400 mt-2">
                  Entrarei em contato em breve.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900 border border-primary-700/30 rounded-lg focus:outline-none focus:border-primary-500 text-white placeholder-gray-500 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900 border border-primary-700/30 rounded-lg focus:outline-none focus:border-primary-500 text-white placeholder-gray-500 transition-colors"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900 border border-primary-700/30 rounded-lg focus:outline-none focus:border-primary-500 text-white placeholder-gray-500 transition-colors"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-dark-900 border border-primary-700/30 rounded-lg focus:outline-none focus:border-primary-500 text-white placeholder-gray-500 transition-colors resize-none"
                    placeholder="Sua mensagem aqui..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full"
                  >
                    Enviar Mensagem
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
