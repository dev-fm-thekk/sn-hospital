'use client'

import { useState } from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Stethoscope,
  GraduationCap,
  Calendar,
  ExternalLink,
  Clock
} from 'lucide-react'
import Image from 'next/image'

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: '15+ Years',
    education: 'Harvard Medical School',
    rating: 4.9,
    reviews: 124,
    availability: 'Available Today',
    description: 'Expert in non-invasive cardiology and cardiovascular disease prevention.',
    color: 'from-blue-500 to-indigo-600',
    icon: <Stethoscope className="w-8 h-8" />,
    profileUrl: '',       // ← drop image URL here; falls back to initials if empty
    initials: 'SJ',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    experience: '12+ Years',
    education: 'Johns Hopkins University',
    rating: 4.8,
    reviews: 98,
    availability: 'Next: Monday',
    description: 'Specializing in advanced treatment for complex neurological disorders.',
    color: 'from-purple-500 to-pink-600',
    icon: <Stethoscope className="w-8 h-8" />,
    profileUrl: '',
    initials: 'MC',
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Orthopedic Surgeon',
    experience: '10+ Years',
    education: 'Stanford University',
    rating: 4.9,
    reviews: 156,
    availability: 'Available Today',
    description: 'Focused on sports medicine and minimally invasive surgical techniques.',
    color: 'from-emerald-500 to-teal-600',
    icon: <Stethoscope className="w-8 h-8" />,
    profileUrl: '',
    initials: 'ER',
  },
  {
    id: 4,
    name: 'Dr. James Williams',
    specialty: 'General Practitioner',
    experience: '18+ Years',
    education: 'Mayo Clinic College',
    rating: 4.7,
    reviews: 210,
    availability: 'Next: Tuesday',
    description: 'Comprehensive family medicine with a focus on holistic wellness.',
    color: 'from-orange-500 to-red-600',
    icon: <Stethoscope className="w-8 h-8" />,
    profileUrl: '',
    initials: 'JW',
  },
  {
    id: 5,
    name: 'Dr. Lisa Anderson',
    specialty: 'Ophthalmologist',
    experience: '14+ Years',
    education: 'UPenn Medical School',
    rating: 4.9,
    reviews: 87,
    availability: 'Available Today',
    description: 'Excellence in laser eye surgery and refractive vision correction.',
    color: 'from-cyan-500 to-blue-600',
    icon: <Stethoscope className="w-8 h-8" />,
    profileUrl: '',
    initials: 'LA',
  },
]

export function DoctorsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  const nextDoctor = () => setCurrentIndex((prev) => (prev + 1) % doctors.length)
  const prevDoctor = () => setCurrentIndex((prev) => (prev - 1 + doctors.length) % doctors.length)

  const handleMouseDown = (e: React.MouseEvent) => { setIsDragging(true); setStartX(e.clientX) }
  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return
    setIsDragging(false)
    const diff = startX - e.clientX
    if (Math.abs(diff) > 50) diff > 0 ? nextDoctor() : prevDoctor()
  }

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => setStartX(e.touches[0].clientX)
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = startX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? nextDoctor() : prevDoctor()
  }

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex
    const totalCards = doctors.length
    let normalizedDiff = diff
    if (diff > totalCards / 2) normalizedDiff = diff - totalCards
    else if (diff < -totalCards / 2) normalizedDiff = diff + totalCards

    const isActive = normalizedDiff === 0
    const isNext = normalizedDiff === 1 || normalizedDiff === -(totalCards - 1)
    const isPrev = normalizedDiff === -1 || normalizedDiff === (totalCards - 1)

    let zIndex = 1, opacity = 0, scale = 0.8, translateX = 0, rotate = 0

    if (isActive) { zIndex = 30; opacity = 1; scale = 1 }
    else if (isNext) { zIndex = 20; opacity = 0.4; scale = 0.9; translateX = 100; rotate = 10 }
    else if (isPrev) { zIndex = 20; opacity = 0.4; scale = 0.9; translateX = -100; rotate = -10 }

    return {
      position: 'absolute' as const,
      zIndex,
      opacity,
      transform: `translateX(${translateX}px) scale(${scale}) rotate(${rotate}deg)`,
      transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
      pointerEvents: isActive ? 'auto' : ('none' as React.CSSProperties['pointerEvents']),
      filter: isActive ? 'none' : 'blur(2px)',
    }
  }

  return (
    <section id="doctors" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <Badge variant="outline" className="px-4 py-1 border-primary/20 text-primary bg-primary/5 backdrop-blur-sm">
            Meet the Experts
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Our Medical <span className="text-primary italic">Specialists</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Entrust your health to our world-class medical team, dedicated to providing compassionate and innovative care.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left nav */}
          <button
            onClick={prevDoctor}
            className="hidden md:flex group relative items-center justify-center w-14 h-14 rounded-2xl bg-card border border-border/50 hover:border-primary/50 shadow-sm transition-all duration-300 hover:scale-105"
          >
            <ChevronLeft className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>

          {/* Cards container — touch events added for mobile swipe */}
          <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative w-full max-w-[420px] h-[600px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            {doctors.map((doctor, index) => (
              <div
                key={doctor.id}
                style={getCardStyle(index)}
                className="w-full h-full"
              >
                <Card className="relative mx-auto w-full max-w-sm pt-0 rounded-xl overflow-hidden">

                  {/* Cover Image */}
                  <div className='p-3'>
                    <div className="relative w-full h-48 rounded-4xl overflow-hidden">
                      <Image
                        src="/sky.jpeg"
                        alt="Doctor"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-28 -translate-x-1/2 z-10">

                    <div className="relative flex items-center justify-center">
                      {/* Avatar */}
                      <Avatar className="w-32 h-32 border-4 border-white shadow-lg relative z-10">
                        <AvatarImage src="https://github.com/shadcn.png" alt="doctor" />
                      </Avatar>

                    </div>

                  </div>
                  {/* Content (IMPORTANT: padding-top to avoid overlap) */}
                  <CardHeader className="text-center mt-2">
                    <CardTitle className='text-xl'>{doctor.name}</CardTitle>
                    <CardDescription className='text-md'>{doctor.description}</CardDescription>
                    <div className="w-full flex items-center justify-between gap-2 px-3 py-3">

                      <Button variant="outline" className="flex-1">
                        {doctor.rating}
                      </Button>

                      <Button variant="outline" className="flex-1">
                        {doctor.specialty}
                      </Button>

                      <Button variant="outline" className="flex-1">
                        {doctor.experience}
                      </Button>

                    </div>
                    <Button variant={ doctor.availability === "Available Today" ? "secondary" : "destructive"}
                     className='w-32 mx-auto'>{doctor.availability}</Button>
                  </CardHeader>
                  <CardFooter>
                    <Button className="w-full">Book Appointment</Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          {/* Right nav */}
          <button
            onClick={nextDoctor}
            className="hidden md:flex group relative items-center justify-center w-14 h-14 rounded-2xl bg-card border border-border/50 hover:border-primary/50 shadow-sm transition-all duration-300 hover:scale-105"
          >
            <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>

        {/* Mobile indicators */}
        <div className="flex items-center justify-center gap-3 mt-12 md:hidden">
          <Button variant="ghost" size="icon" onClick={prevDoctor} className="rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="flex gap-2">
            {doctors.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-primary' : 'w-1.5 bg-muted-foreground/30'}`}
              />
            ))}
          </div>
          <Button variant="ghost" size="icon" onClick={nextDoctor} className="rounded-full">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}