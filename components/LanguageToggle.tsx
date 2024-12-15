'use client'

import { Languages } from 'lucide-react'

interface LanguageToggleProps {
  language: 'en' | 'fr'
  setLanguage: (language: 'en' | 'fr') => void
}

export default function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className="inline-flex items-center gap-1.5 px-2 py-1.5 text-xs font-medium hover:bg-foreground/5 rounded-md transition-colors border border-border"
      aria-label="Toggle language"
    >
      <Languages size={14} className="text-muted" />
      {language.toUpperCase()}
    </button>
  )
}
