'use client'
import { motion } from 'framer-motion'
import { DiJava } from 'react-icons/di'
import {
    SiAmazon,
    SiApachekafka,
    SiDjango,
    SiDocker,
    SiGin,
    SiGit,
    SiGo,
    SiJavascript,
    SiKubernetes,
    SiLaravel,
    SiMongodb,
    SiPostgresql,
    SiPython,
    SiRust,
    SiSpring
} from 'react-icons/si'

export default function Technologies() {
  const techStack = {
    languages: [
      { icon: SiGo, name: 'Go' },
      { icon: SiPython, name: 'Python' },
      { icon: SiRust, name: 'Rust' },
      { icon: DiJava, name: 'Java' },
      { icon: SiJavascript, name: 'JavaScript' }
    ],
    frameworks: [
      { icon: SiSpring, name: 'Spring' },
      { icon: SiDjango, name: 'Django' },
      { icon: SiGin, name: 'Gin' },
      { icon: SiLaravel, name: 'Laravel' }
    ],
    databases: [
      { icon: SiPostgresql, name: 'PostgreSQL' },
      { icon: SiMongodb, name: 'MongoDB' }
    ],
    tools: [
      { icon: SiDocker, name: 'Docker' },
      { icon: SiKubernetes, name: 'Kubernetes' },
      { icon: SiApachekafka, name: 'Kafka' },
      { icon: SiAmazon, name: 'AWS' },
      { icon: SiGit, name: 'Git' }
    ]
  }

  return (
    <div className="space-y-6">
      {Object.entries(techStack).map(([category, techs], index) => (
        <motion.div
          key={category}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="text-lg font-medium">{category}</h3>
          <div className="flex flex-wrap gap-4">
            {techs.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                <tech.icon className="tech-icon" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm text-muted">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
