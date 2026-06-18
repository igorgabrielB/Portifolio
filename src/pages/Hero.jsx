import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import { RiArrowDownSLine, RiRocketLine } from 'react-icons/ri'

export default function Hero({ onCTAClick }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="min-h-screen relative overflow-hidden pt-20 flex items-center justify-center px-4 hero-background">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-dark opacity-40"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 hero-grid"></div>
      <div className="absolute top-10 left-8 w-72 h-72 bg-primary-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse hidden md:block"></div>
      <div className="absolute bottom-10 right-8 w-72 h-72 bg-primary-700/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse hidden md:block" style={{ animationDelay: '2s' }}></div>
      <div className="absolute left-1/2 top-1/4 w-px h-80 hero-line hidden lg:block"></div>
      <div className="absolute right-1/4 top-2/3 w-px h-64 hero-line opacity-70 hidden lg:block"></div>
      <div className="absolute left-10 top-1/2 w-24 h-24 rounded-full border border-primary-500/40 blur-xl hidden lg:block"></div>
      <div className="absolute right-20 bottom-32 w-32 h-32 rounded-full border border-primary-400/30 blur-2xl hidden lg:block"></div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary-700/20 border border-primary-500/50 rounded-full">
            <RiRocketLine className="text-primary-300" size={18} />
            <p className="text-primary-300 text-sm font-semibold">Bem-vindo ao meu portfólio</p>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block text-white mb-2">Desenvolvedor</span>
            <span className="block bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
              Full Stack
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants}>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Criando soluções digitais ousadas e modernas com tecnologias cutting-edge.
            Especializado em sistemas web escaláveis e interfaces intuitivas.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button 
            size="lg" 
            onClick={onCTAClick}
            className="group"
          >
            Ver Projetos
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
          >
            Entre em Contato
          </Button>
        </motion.div>

        {/* Floating Arrow */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="flex justify-center text-primary-400"
        >
          <RiArrowDownSLine size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}
