import React from 'react'
import Nav from '../../components/Nav/Nav'
import Hero from '../../components/Hero/Hero'
import Collection from '../../components/Collection/Collection'
import FooterBanner from '../../components/footer/FooterBanner'

function Home() {
  return (
    <div className="App">
      <Nav />
      <Hero />
    
      <Collection/>
      <FooterBanner />
    </div>
  )
}



export default Home
