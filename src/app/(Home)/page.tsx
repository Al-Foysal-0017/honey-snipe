import React from 'react'
import Hero from './components/Hero/Hero'
import HowWorks from './components/howWorks/HowWorks'
import Safety from './components/Safety/Safety'

const page = () => {
  return (
    <div>
      <Hero/>
      <HowWorks/>
      <Safety/>
    </div>
  )
}

export default page