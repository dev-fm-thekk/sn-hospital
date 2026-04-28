'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Doctors' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 bg-transparent backdrop-blur-0 rounded-full px-6 py-3 border border-transparent hover: hover:border-border/40 transition-all duration-300">
          {/* Nav Items - Centered */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-accent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-border/40"></div>

          {/* CTA Button */}
          <Button className="hidden sm:inline-flex rounded-full">
            Book Appointment
          </Button>
        </div>
      </div>
    </nav>
  )
}
