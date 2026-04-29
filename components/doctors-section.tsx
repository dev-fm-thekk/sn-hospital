'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
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
  ExternalLink
} from 'lucide-react'

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
                <Card className="h-full border border-border/50 bg-card/80 backdrop-blur-xl shadow-2xl overflow-hidden rounded-3xl">
                  <CardContent className="p-0 h-full flex flex-col">

                    {/* ── Header: gradient + avatar row ── */}
                    <div className={`relative bg-gradient-to-br ${doctor.color} overflow-hidden flex-shrink-0`}>
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,1)_1px,transparent_0)] bg-[size:24px_24px]" />

                      {/* Top row: avatar + badges */}
                      <div className="relative z-10 flex items-start justify-between p-6 pb-4">
                        {/* Avatar */}
                        <Avatar className="w-16 h-16 border-2 border-white/40 shadow-lg">
                          <AvatarImage src={doctor.profileUrl} alt={doctor.name} />
                          <AvatarFallback className="bg-white/20 text-white font-bold text-lg backdrop-blur-md">
                            {doctor.initials}
                          </AvatarFallback>
                        </Avatar>

                        {/* Rating + availability */}
                        <div className="flex flex-col items-end gap-2">
                          <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            {doctor.rating}
                          </div>
                          <div className="px-3 py-1 bg-black/20 backdrop-blur-md rounded-full text-white text-[10px] font-medium border border-white/10 uppercase tracking-widest">
                            {doctor.availability}
                          </div>
                        </div>
                      </div>

                      {/* Name + specialty */}
                      <div className="relative z-10 px-6 pb-6">
                        <h3 className="text-white text-2xl font-bold leading-tight">{doctor.name}</h3>
                        <p className="text-white/80 font-medium tracking-wide text-sm mt-0.5">{doctor.specialty}</p>
                      </div>
                    </div>

                    {/* ── Body ── */}
                    <div className="flex-1 p-6 space-y-5 overflow-hidden">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Experience</p>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm font-semibold">{doctor.experience}</span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Education</p>
                          <div className="flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm font-semibold truncate" title={doctor.education}>
                              {doctor.education.split(' ').slice(-2).join(' ')}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed text-muted-foreground font-medium">
                        {doctor.description}
                      </p>

                      <div className="flex items-center gap-3 pt-2">
                        <Button className="flex-1 h-12 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                          Book Appointment
                        </Button>
                        <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl hover:border-primary/50 transition-all">
                          <ExternalLink className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>

                  </CardContent>
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

        {/* Progress text */}
        <div className="mt-12 text-center">
          <p className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
            <span className="text-primary">{String(currentIndex + 1).padStart(2, '0')}</span> / {String(doctors.length).padStart(2, '0')} Medical Partners
          </p>
        </div>
      </div>
    </section>
  )
}