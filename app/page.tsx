import React from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'

import Quest from '@/components/Quest'
import InstructorNetwork from '@/components/InstructorNetwork'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />

      <Quest />
      <InstructorNetwork />
    </>
  )
}