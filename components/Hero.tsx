import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

interface HeroProps {
  language: 'en' | 'fr'
  setActiveSection: (section: string) => void
}

export default function Hero({ language, setActiveSection }: HeroProps) {
  const content = {
    en: {
      title: 'Software Engineer (Backend)',
      tagline: 'Make it simple. Make it possible.',
      cta: 'Feel free to reach me out if you want to build something together, have any questions, or just want to connect.'
    },
    fr: {
      title: 'Ingénieur Logiciel (Backend)',
      tagline: 'Simplifier. Rendre possible.',
      cta: 'N\'hésitez pas à me contacter si vous souhaitez construire quelque chose ensemble, avoir des réponses à vos questions, ou simplement échanger.'
    }
  }

  return (
    <div className="space-y-8">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-6xl font-light">
          Abdoul Hamid<br />
          <span className="font-normal">COULIBALY</span>
        </h1>
        <h2 className="text-2xl text-gray-400">{content[language].title}</h2>
      </motion.div>

      <motion.p
        className="text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {content[language].tagline}
      </motion.p>

      <motion.div
        className="flex items-center gap-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <a
          href="https://linkedin.com/in/abdoul-hamid-coulibaly"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-blue-400 transition-colors"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/dimahluodba96"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-blue-400 transition-colors"
        >
          <Github size={24} />
        </a>
        <a
          href="mailto:abdoulhamid.coulibaly@gmail.com"
          className="text-muted hover:text-blue-400 transition-colors"
        >
          <Mail size={24} />
        </a>
      </motion.div>

      <div className="space-y-6">
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
          {content[language].cta}
        </p>
        <button
          onClick={() => setActiveSection('contact')}
          className="get-in-touch group"
          aria-label={language === 'en' ? 'Get in touch' : 'Me contacter'}
        >
          <span>{language === 'en' ? 'Get in touch' : 'Me contacter'}</span>
          <svg
            className="ml-2 w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
