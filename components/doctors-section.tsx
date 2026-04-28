'use client'

import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: '15+ years',
    description: 'Specializing in heart disease prevention and treatment with a patient-first approach.',
    image: '👨‍⚕️',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    experience: '12+ years',
    description: 'Expert in neurological disorders with advanced diagnostic and treatment methods.',
    image: '👨‍⚕️',
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Orthopedic Surgeon',
    experience: '10+ years',
    description: 'Specialized in sports medicine and joint replacement surgeries.',
    image: '👩‍⚕️',
  },
  {
    id: 4,
    name: 'Dr. James Williams',
    specialty: 'General Practitioner',
    experience: '18+ years',
    description: 'Comprehensive general healthcare with a focus on preventive medicine.',
    image: '👨‍⚕️',
  },
  {
    id: 5,
    name: 'Dr. Lisa Anderson',
    specialty: 'Ophthalmologist',
    experience: '14+ years',
    description: 'Expert in vision correction and eye disease management.',
    image: '👩‍⚕️',
  },
]

export function DoctorsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextDoctor = () => {
    setCurrentIndex((prev) => (prev + 1) % doctors.length)
  }

  const prevDoctor = () => {
    setCurrentIndex((prev) => (prev - 1 + doctors.length) % doctors.length)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return
    setIsDragging(false)

    const endX = e.clientX
    const diff = startX - endX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextDoctor()
      } else {
        prevDoctor()
      }
    }
  }

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex
    const totalCards = doctors.length

    // Normalize the difference to handle circular array
    let normalizedDiff = diff
    if (diff > totalCards / 2) {
      normalizedDiff = diff - totalCards
    } else if (diff < -totalCards / 2) {
      normalizedDiff = diff + totalCards
    }

    // Calculate z-index and opacity
    const isVisible = Math.abs(normalizedDiff) < 2
    const zIndex = 10 - Math.abs(normalizedDiff)
    const opacity = normalizedDiff === 0 ? 1 : 0

    // Transform for playing card effect
    const translateX = normalizedDiff * 50
    const rotateZ = normalizedDiff * 15
    const scale = normalizedDiff === 0 ? 1 : 0.95 - Math.abs(normalizedDiff) * 0.05

    return {
      position: 'absolute' as const,
      zIndex,
      opacity,
      transform: `translateX(${translateX}px) rotateZ(${rotateZ}deg) scale(${scale})`,
      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
      pointerEvents: isVisible ? 'auto' : 'none',
    }
  }

  return (
    <section id="doctors" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            Our Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scroll or drag the cards to explore our team of highly qualified medical professionals.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="flex items-center justify-center gap-4">
          {/* Left Navigation Button */}
          <button
            onClick={prevDoctor}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex-shrink-0"
            aria-label="Previous doctor"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => setIsDragging(false)}
            className="relative w-full max-w-md h-96 cursor-grab active:cursor-grabbing"
          >
            {doctors.map((doctor, index) => (
              <div
                key={doctor.id}
                style={getCardStyle(index) as React.CSSProperties}
                className="w-full h-full"
              >
                <Card className="h-full border-0 overflow-hidden shadow-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
                  {/* Image/Avatar Section with Gradient Background */}
                  <div className="h-40 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
                    </div>
                    <div className="text-8xl relative z-10">{doctor.image}</div>
                  </div>

                  <CardContent className="pt-8 pb-6 px-6">
                    {/* Doctor Name */}
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {doctor.name}
                    </CardTitle>

                    {/* Specialty Badge */}
                    <div className="mb-4">
                      <Badge className="bg-primary/90 hover:bg-primary text-primary-foreground">
                        {doctor.specialty}
                      </Badge>
                    </div>

                    {/* Experience */}
                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="font-medium">{doctor.experience}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                      {doctor.description}
                    </p>

                    {/* CTA */}
                    <button className="w-full py-2.5 px-4 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors">
                      Contact
                    </button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={nextDoctor}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex-shrink-0"
            aria-label="Next doctor"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-8">
          <button
            onClick={prevDoctor}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {doctors.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to doctor ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextDoctor}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Counter */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            {currentIndex + 1} of {doctors.length}
          </p>
        </div>
      </div>
    </section>
  )
}
