import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2 } from 'lucide-react'

export function AboutSection() {
  const highlights = [
    'State-of-the-art medical equipment and technology',
    '24/7 emergency services and round-the-clock support',
    'Compassionate and highly trained medical professionals',
    'Patient-centered approach to healthcare delivery',
    'Latest medical protocols and treatment methods',
    'Affordable and transparent pricing structure',
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            About Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Delivering Excellence in Healthcare
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Founded with a mission to revolutionize healthcare, we combine cutting-edge technology with compassionate care to serve our community.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Why Choose MediCare?</h3>
            <p className="text-muted-foreground leading-relaxed">
              At MediCare, we believe that healthcare should be accessible, affordable, and of the highest quality. Our team of experienced healthcare professionals is dedicated to providing personalized care tailored to each patient's unique needs.
            </p>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="border border-border/50 bg-white/50 dark:bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl">200+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Hospital Beds</p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-white/50 dark:bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl">40+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Specialists</p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-white/50 dark:bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl">ISO</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Certified</p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-white/50 dark:bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl">24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
