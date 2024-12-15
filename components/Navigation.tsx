import { type KeyboardEvent } from 'react'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const sections = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ]

  const handleKeyPress = (e: KeyboardEvent<HTMLButtonElement>, sectionId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setActiveSection(sectionId)
    }
  }

  return (
    <nav className="space-y-4 mb-16">
      {sections.map((section) => (
        <div key={section.id}>
          <button
            onClick={() => setActiveSection(section.id)}
            className={`nav-link ${activeSection === section.id ? 'text-white' : 'text-gray-400'}`}
            onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) => handleKeyPress(e, section.id)}
          >
            {section.label}
          </button>
        </div>
      ))}
    </nav>
  )
}
