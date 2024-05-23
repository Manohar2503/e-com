import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import MenBanner from '../components/MenBanner'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <MenBanner/>
        <Products/>
    </div>
  )
}

export default LandingPage