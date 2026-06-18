import React from 'react'
import { motion } from 'framer-motion'
import { RiTeamLine, RiFlashlightLine, RiBookOpenLine, RiEyeLine } from 'react-icons/ri'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'

export default function About() {
  const skills = [
    { category: 'Backend', items: ['PHP', 'Python', 'SQL', 'REST APIs', 'Desenvolvimento Web'] },
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'Design Responsivo', 'React'] },
    { category: 'Aprendendo', items: ['Docker', 'AWS', 'Cloud Computing', 'Conteinerização'] },
  ]

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
          title="Sobre Mim"
          subtitle="Conheca mais sobre minha jornada e expertise"
        />

        {/* About Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
        >
          {/* Bio */}
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <h3 className="text-2xl font-bold mb-4 text-primary-400">
                Desenvolvedor Full Stack
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Sou um desenvolvedor Full Stack com experiência em PHP, SQL, Python, HTML e CSS, atuando no desenvolvimento e manutenção de aplicações web.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Possuo perfil de liderança, sou proativo e movido pela curiosidade de aprender. Tenho interesse em entender todo o fluxo das aplicações, buscando sempre código organizado, boas práticas e soluções eficientes.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Atualmente estou estudando Docker e AWS, com foco em ambientes cloud, conteinerização e evolução técnica contínua.
              </p>
            </Card>
          </motion.div>

          {/* Profile Photo */}
          <motion.div variants={itemVariants} className="flex items-center justify-center">
            <div className="relative">
              {/* Glow Effect Background */}
              <div className="absolute inset-0 bg-gradient-purple rounded-full blur-2xl opacity-40 -z-10 animate-pulse"></div>
              
              {/* Photo Container */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary-500/50 shadow-2xl shadow-primary-700/50 hover:shadow-3xl hover:shadow-primary-600/75 transition-all duration-300">
                <img 
                  src="assets/profile.jpg" 
                  alt="KostaDev - Foto profissional" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: 'center 35%' }}
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-500/20 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-600/20 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Habilidades</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="text-center">
                  <h4 className="text-xl font-semibold mb-4 text-primary-400">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillGroup.items.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-primary-700/20 text-primary-300 rounded-full text-sm border border-primary-600/50 hover:bg-primary-700/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Diferenciais */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Características Principais</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Liderança', icon: RiTeamLine },
              { title: 'Proatividade', icon: RiFlashlightLine },
              { title: 'Aprendizado Contínuo', icon: RiBookOpenLine },
              { title: 'Visão Completa', icon: RiEyeLine },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="text-center h-full flex flex-col items-center justify-center py-8">
                    <div className="text-primary-400 text-5xl mb-4">
                      <Icon />
                    </div>
                    <p className="font-semibold text-primary-300">{item.title}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
