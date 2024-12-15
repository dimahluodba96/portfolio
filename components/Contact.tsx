import { motion } from 'framer-motion'
import { Linkedin, Mail, MapPin } from 'lucide-react'

interface ContactProps {
  language: 'en' | 'fr'
}

export default function Contact({ language }: ContactProps) {
  const content = {
    en: {
      email: 'Email',
      linkedin: 'LinkedIn',
      location: 'Location',
      locationText: 'Rennes, Bretagne, France',
      cta: 'Feel free to reach out if you want to build something together, have any questions, or just want to connect.'
    },
    fr: {
      email: 'Email',
      linkedin: 'LinkedIn',
      location: 'Localisation',
      locationText: 'Rennes, Bretagne, France',
      cta: 'N\'hésitez pas à me contacter si vous souhaitez construire quelque chose ensemble, avoir des réponses à vos questions, ou simplement échanger.'
    }
  }

  return (
    <motion.section
      className="space-y-12 max-w-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="space-y-8"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="text-muted text-lg md:text-xl">{content[language].cta}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4 group">
            <Mail className="w-6 h-6 mt-1 flex-shrink-0 group-hover:text-foreground transition-colors" />
            <div className="space-y-1">
              <p className="text-sm text-gray-400">{content[language].email}</p>
              <a
                href="mailto:abdoulhamid.coulibaly@gmail.com"
                className="text-lg break-all hover:text-blue-400 transition-colors"
              >
                abdoulhamid.coulibaly@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <Linkedin className="w-6 h-6 mt-1 flex-shrink-0 text-blue-400" />
            <div className="space-y-1">
              <p className="text-sm text-gray-400">{content[language].linkedin}</p>
              <a
                href="https://linkedin.com/in/abdoul-hamid-coulibaly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-400 hover:underline break-all"
              >
                linkedin.com/in/abdoul-hamid-coulibaly
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <MapPin className="w-6 h-6 mt-1 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
            <div className="space-y-1">
              <p className="text-sm text-gray-400">{content[language].location}</p>
              <p className="text-lg">{content[language].locationText}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
