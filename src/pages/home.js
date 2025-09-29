import React from 'react'
import NavBar from '../components/navbar'
import Hero from '../components/hero'
import FeatureCards from '../components/featureCards'
import ReviewCarousel from '../components/reviewCarousel'
import Footer from '../components/footer'

const HomePage = () => {
  return (
    <div style={{width: '100%', overflowX: 'hidden'}}>
        <NavBar/>
        <Hero/>
        <FeatureCards/>
        <ReviewCarousel/>
        <Footer/>
    </div>
  )
}

export default HomePage