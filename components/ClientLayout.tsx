'use client'

import { SectionProvider } from '@/context/SectionContext'
import { Navbar } from '@/components/navbar'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SectionProvider>
      <Navbar />
      {children}
    </SectionProvider>
  )
}