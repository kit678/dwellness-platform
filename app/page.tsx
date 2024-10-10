import React from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Digest from '@/components/Digest'
import Quest from '@/components/Quest'
import InstructorNetwork from '@/components/InstructorNetwork'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Digest />
      <Quest />
      <InstructorNetwork />
    </>
  )
}