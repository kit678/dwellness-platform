import React from 'react'
import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import Services from '@/app/components/Services'
import Digest from '@/app/components/Digest'
import Quest from '@/app/components/Quest'
import InstructorNetwork from '@/app/components/InstructorNetwork'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Digest />
        <Quest />
        <InstructorNetwork />
      </main>
      <Footer />
    </div>
  )
}