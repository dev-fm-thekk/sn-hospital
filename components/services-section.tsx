'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import {
  Heart,
  Brain,
  Zap,
  Bone,
  Eye,
  Stethoscope,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Expert cardiac care including diagnosis and treatment of heart conditions with our world-class cardiologists.',
    bg: 'bg-primary/5',
    border: 'border-primary/10',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    stat: '5,200+',
    statLabel: 'Hearts treated',
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Specialized neurological care for brain and nervous system disorders.',
    bg: 'bg-secondary/40', 
    border: 'border-secondary',
    iconBg: 'bg-background',
    iconColor: 'text-foreground',
    stat: '98%',
    statLabel: 'Success rate',
  },
  {
    icon: Zap,
    title: 'Emergency Care',
    description: '24/7 emergency services with rapid response and treatment.',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    iconBg: 'bg-primary',
    iconColor: 'text-primary-foreground',
    stat: '<4 min',
    statLabel: 'Avg. response',
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Advanced eye care and vision correction services.',
    bg: 'bg-secondary/20',
    border: 'border-secondary',
    iconBg: 'bg-secondary',
    iconColor: 'text-secondary-foreground',
    stat: '3,800+',
    statLabel: 'Procedures',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Comprehensive orthopedic and bone health services from fractures to joint replacements and sports injuries.',
    bg: 'bg-primary/[0.03]',
    border: 'border-primary/10',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    stat: '1,400+',
    statLabel: 'Surgeries / yr',
  },
  {
    icon: Stethoscope,
    title: 'General Medicine',
    description: 'Routine checkups and treatment for common health conditions.',
    bg: 'bg-secondary/40',
    border: 'border-secondary',
    iconBg: 'bg-background',
    iconColor: 'text-foreground',
    stat: '200+',
    statLabel: 'Doctors',
  },
]

export function ServicesSection() {
  const [cardiology, neurology, emergency, ophthalmology, orthopedics, general] = services

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <Badge className="mb-4" variant="outline">Our Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Comprehensive Medical Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of medical services backed by expert specialists
            and modern technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Cardiology - Large Static Card */}
          <Card className={`col-span-1 md:col-span-2 ${cardiology.bg} ${cardiology.border} shadow-none overflow-hidden flex flex-col justify-between min-h-[320px]`}>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className={`w-14 h-14 ${cardiology.iconBg} rounded-2xl flex items-center justify-center`}>
                <Heart className={`w-7 h-7 ${cardiology.iconColor}`} />
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{cardiology.stat}</div>
                <p className="text-xs text-muted-foreground font-medium uppercase">{cardiology.statLabel}</p>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-3xl mb-3">{cardiology.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed max-w-md">
                {cardiology.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button className="rounded-full px-6">
                Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Neurology & Emergency - Vertical Stack */}
          <div className="flex flex-col gap-6">
            {[neurology, emergency].map((svc) => (
              <Card key={svc.title} className={`flex-1 ${svc.bg} ${svc.border} border shadow-none`}>
                <CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
                  <div className={`w-10 h-10 ${svc.iconBg} rounded-lg flex items-center justify-center`}>
                    <svc.icon className={`w-5 h-5 ${svc.iconColor}`} />
                  </div>
                  <span className="font-bold text-lg">{svc.stat}</span>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg mb-1">{svc.title}</CardTitle>
                  <CardDescription className="text-xs line-clamp-2">{svc.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Ophthalmology & General - Vertical Stack */}
          <div className="flex flex-col gap-6">
            {[ophthalmology, general].map((svc) => (
              <Card key={svc.title} className={`flex-1 ${svc.bg} ${svc.border} border shadow-none`}>
                <CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
                  <div className={`w-10 h-10 ${svc.iconBg} rounded-lg flex items-center justify-center`}>
                    <svc.icon className={`w-5 h-5 ${svc.iconColor}`} />
                  </div>
                  <span className="font-bold text-lg">{svc.stat}</span>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg mb-1">{svc.title}</CardTitle>
                  <CardDescription className="text-xs line-clamp-2">{svc.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Orthopedics - Large Static Card */}
          <Card className={`col-span-1 md:col-span-2 ${orthopedics.bg} ${orthopedics.border} shadow-none overflow-hidden flex flex-col justify-between min-h-[320px]`}>
            <CardHeader className="flex flex-row items-center justify-between">
              <div className={`w-14 h-14 ${orthopedics.iconBg} rounded-2xl flex items-center justify-center`}>
                <Bone className={`w-7 h-7 ${orthopedics.iconColor}`} />
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{orthopedics.stat}</div>
                <p className="text-xs text-muted-foreground font-medium uppercase">{orthopedics.statLabel}</p>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-3xl mb-3">{orthopedics.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed max-w-md">
                {orthopedics.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="rounded-full px-6 border-primary/20">
                View Specialized Clinics
              </Button>
            </CardFooter>
          </Card>

        </div>
      </div>
    </section>
  )
}