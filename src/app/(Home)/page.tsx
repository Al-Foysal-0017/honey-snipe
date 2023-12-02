import React from 'react'
import Hero from './components/Hero/Hero'
import Roadmap from './components/Roadmap/Roadmap'
import HowWorks from './components/howWorks/HowWorks'
import Safety from './components/Safety/Safety'
import Tokenomics from './components/Tokenomics/Tokenomics'
import JoinMsg from './components/JoinMsg/JoinMsg'

const Home = () => {
  return (
    <div>
      <Hero/>
      <HowWorks/>
      <Safety/>
      <Tokenomics/>
      <Roadmap/>
      <JoinMsg/>
    </div>
  )
}

export default Home