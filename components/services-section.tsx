import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Heart,
  Brain,
  Zap,
  Bone,
  Eye,
  Stethoscope,
} from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Expert cardiac care including diagnosis and treatment of heart conditions.',
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Specialized neurological care for brain and nervous system disorders.',
  },
  {
    icon: Zap,
    title: 'Emergency Care',
    description: '24/7 emergency services with rapid response and treatment.',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Comprehensive orthopedic and bone health services.',
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Advanced eye care and vision correction services.',
  },
  {
    icon: Stethoscope,
    title: 'General Medicine',
    description: 'Routine checkups and treatment for common health conditions.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Medical Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of medical services backed by expert specialists and modern technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border border-border/50 hover:shadow-lg transition-all duration-300 hover:border-primary/50 group cursor-pointer"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
