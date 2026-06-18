import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import Button from '../components/Button'
import { RiGithubFill, RiExternalLinkLine, RiFolderOpenLine, RiCameraLine } from 'react-icons/ri'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Prontuário Hospitalar',
      description: 'Plataforma completa para gerenciamento de prontuários eletrônicos hospitalares. Sistema robusto para registrar e consultar dados de pacientes com segurança e eficiência.',
      icon: RiFolderOpenLine,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT Auth', 'Tailwind CSS'],
      highlights: [
        'Gerenciamento seguro de dados de pacientes',
        'Interface intuitiva para médicos e administradores',
        'Relatórios e estatísticas em tempo real',
        'Sistema de permissões granulares',
      ],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Website para Fotógrafos',
      description: 'Plataforma profissional para fotógrafos exibirem seus trabalhos. Galeria interativa com portfólio, agendamento de sessões e gerenciamento de clientes.',
      icon: RiCameraLine,
      technologies: ['React', 'Firebase', 'Stripe', 'Next.js', 'Framer Motion'],
      highlights: [
        'Galeria responsiva e otimizada',
        'Sistema de agendamento integrado',
        'Processamento de pagamentos',
        'Dashboard de gerenciamento',
      ],
      github: 'https://github.com/igorgabrielB/melcampos',
      demo: 'https://igorgabrielb.github.io/melcampos/',
      featured: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-dark-900 to-dark-950">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Meus Projetos"
          subtitle="Trabalhos que demonstram minha expertise e paixão por desenvolvimento"
        />

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden hover:scale-105 transition-transform duration-300">
                {/* Project Image/Icon */}
                <div className="w-full h-40 sm:h-44 md:h-48 bg-gradient-to-br from-primary-600/20 to-primary-700/20 flex items-center justify-center mb-4 rounded-lg">
                  <project.icon className="text-7xl text-primary-400" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <p className="text-sm text-primary-300 font-semibold mb-2">Destaques:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-400 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-sm text-primary-300 font-semibold mb-2">Tecnologias:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-primary-700/30 text-primary-300 rounded text-xs border border-primary-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-primary-700/30">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="flex-1 flex items-center justify-center gap-2"
                  >
                    <RiGithubFill size={16} />
                    GitHub
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="flex-1 flex items-center justify-center gap-2"
                  >
                    <RiExternalLinkLine size={16} />
                    Demo
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center py-12"
        >
          <p className="text-gray-400 mb-6">
            Quer saber mais ou trabalhar juntos?
          </p>
          <Button size="lg">
            Vamos Conversar
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
