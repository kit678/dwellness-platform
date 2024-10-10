import React from 'react'
import Hero from '@/app/components/Hero'
import Services from '@/app/components/Services'
import Digest from '@/app/components/Digest'
import Quest from '@/app/components/Quest'
import InstructorNetwork from '@/app/components/InstructorNetwork'

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <Services />
      <Digest />
      <Quest />
      <InstructorNetwork />
    </main>
  )
}