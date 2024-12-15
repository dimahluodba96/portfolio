'use client'

import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import LanguageToggle from '@/components/LanguageToggle'
import MobileNav from '@/components/MobileNav'
import Navigation from '@/components/Navigation'
import Projects from '@/components/Projects'
import ThemeToggle from '@/components/ThemeToggle'
import { useState } from 'react'

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en')
  const [activeSection, setActiveSection] = useState('about')

  const renderContent = () => {
    return (
      <div className="space-y-16">
        {activeSection === 'about' && <About language={language} />}
        {activeSection === 'experience' && <Experience language={language} />}
        {activeSection === 'projects' && <Projects language={language} />}
        {activeSection === 'contact' && <Contact language={language} />}
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8 md:p-16">
      <div className="fixed top-8 right-8 flex items-center gap-2 md:gap-4 z-50">
        <LanguageToggle language={language} setLanguage={setLanguage} />
        <ThemeToggle />
        <div className="lg:hidden">
          <MobileNav activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="lg:fixed lg:top-16 lg:max-w-lg">
            <div className="hidden lg:block">
              <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
            </div>
            <Hero language={language} setActiveSection={setActiveSection} />
          </div>
          <div className="lg:col-start-2">
            <div className="space-y-8">
              <div>
                <div className="sticky top-0 bg-background/80 backdrop-blur-sm py-4 z-10">
                  {activeSection === 'about' && <h2 className="text-3xl md:text-4xl font-light">About Me</h2>}
                  {activeSection === 'experience' && <h2 className="text-3xl md:text-4xl font-light">Experience</h2>}
                  {activeSection === 'projects' && <h2 className="text-3xl md:text-4xl font-light">Projects</h2>}
                  {activeSection === 'contact' && <h2 className="text-3xl md:text-4xl font-light">Contact</h2>}
                </div>
                <div className="pt-8 transition-opacity duration-300 ease-in-out">
                  {renderContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
