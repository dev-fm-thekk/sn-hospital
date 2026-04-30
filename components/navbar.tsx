'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet'
import { Menu, Phone, Calendar, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSection } from '@/hooks/use-section'

export function Navbar() {
  const { currentSection, setCurrentSection } = useSection()
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Doctors' },
  ]

  // ✅ Handle scroll styling
  useEffect(() => {
    const check = () => setIsScrolled(window.scrollY > 20)
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  // ✅ Intersection Observer for active section
  useEffect(() => {
  const sections = navItems
    .map((item) => document.getElementById(item.id))
    .filter(Boolean) as HTMLElement[]

  if (!sections.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      let visibleSection = currentSection
      let maxRatio = 0

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio
          visibleSection = entry.target.id
        }
      })

      if (visibleSection) {
        setCurrentSection(visibleSection)
      }
    },
    {
      threshold: [0.1, 0.25, 0.5, 0.75, 1],
      rootMargin: '-10% 0px -30% 0px', // 👈 helps bottom sections like "doctors"
    }
  )

  sections.forEach((section) => observer.observe(section))

  return () => observer.disconnect()
}, [setCurrentSection])

  // ✅ Scroll to section
  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId)

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div
          className={cn(
            "flex items-center justify-between md:justify-center gap-4 px-4 md:px-6 py-2 md:py-2.5 rounded-full border w-full md:w-auto",
            "bg-background/80 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-out",
            isScrolled
              ? "backdrop-blur-xl border-border/50 shadow-lg shadow-black/5"
              : "border-transparent backdrop-blur-none shadow-none"
          )}
        >
          {/* Mobile Logo */}
          <div className="md:hidden flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">SN</span>
            </div>
            <span className="font-bold text-sm tracking-tight">SN Hospital</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  currentSection === item.id
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-border/40 mx-2" />

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button size="sm" className="rounded-full font-semibold bg-primary hover:bg-primary/90">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <Button size="icon" variant="ghost" className="rounded-full w-9 h-9">
              <Phone className="w-4 h-4" />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-9 h-9 border-border/50 bg-background/50 backdrop-blur-md"
                >
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[300px] border-l border-border/50 p-0">
                <div className="flex flex-col h-full bg-background/95 backdrop-blur-xl">
                  <SheetHeader className="p-6 border-b border-border/50">
                    <SheetTitle className="text-left flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-xs">SN</span>
                      </div>
                      <span>Menu</span>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex-1 py-8 px-4 flex flex-col gap-2">
                    {navItems.map((item) => (
                      <SheetClose key={item.id} asChild>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={cn(
                            "flex items-center justify-between w-full p-4 rounded-2xl text-left transition-all",
                            currentSection === item.id
                              ? "bg-primary/10 text-primary font-bold"
                              : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
                          )}
                        >
                          <span className="text-lg">{item.label}</span>
                          <ArrowRight
                            className={cn(
                              "w-4 h-4 transition-transform",
                              currentSection === item.id
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-4 opacity-0"
                            )}
                          />
                        </button>
                      </SheetClose>
                    ))}
                  </div>

                  <div className="p-6 mt-auto border-t border-border/50 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground px-4">
                      <Phone className="w-4 h-4" />
                      <span>+1 (234) 567 890</span>
                    </div>
                    <Button className="w-full h-12 rounded-2xl gap-2 font-bold shadow-xl shadow-primary/20">
                      <Calendar className="w-4 h-4" />
                      Book Appointment
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}