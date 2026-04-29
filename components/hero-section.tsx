import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-primary/5 via-background to-primary/5 overflow-hidden md:pt-0 pt-8"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-semibold">Welcome to</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
                SN Hospital and <span className="text-primary">Clinic</span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-lg">
              Experience world-class healthcare with our team of expert doctors and state-of-the-art facilities. We're committed to providing you with the best medical care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2">
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/50 dark:bg-card rounded-lg p-6 backdrop-blur-sm border border-border">
              <div className="text-4xl font-bold text-primary">500+</div>
              <p className="text-sm text-muted-foreground mt-2">Happy Patients</p>
            </div>
            <div className="bg-white/50 dark:bg-card rounded-lg p-6 backdrop-blur-sm border border-border">
              <div className="text-4xl font-bold text-primary">25+</div>
              <p className="text-sm text-muted-foreground mt-2">Expert Doctors</p>
            </div>
            <div className="bg-white/50 dark:bg-card rounded-lg p-6 backdrop-blur-sm border border-border">
              <div className="text-4xl font-bold text-primary">15+</div>
              <p className="text-sm text-muted-foreground mt-2">Medical Services</p>
            </div>
            <div className="bg-white/50 dark:bg-card rounded-lg p-6 backdrop-blur-sm border border-border">
              <div className="text-4xl font-bold text-primary">20</div>
              <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
