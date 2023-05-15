import React from 'react'
import Nav from '../components/Nav.js'
import Banner from '../components/Banner.js'
import '../assets/style/HomeScreen.css'


function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav /> 

        <Banner />      
        {/* BANNER*/}

        {/* ROW*/}
    </div>
  )
}

export default HomeScreen