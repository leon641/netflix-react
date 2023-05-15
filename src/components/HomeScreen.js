import React from 'react'
import Nav from '../components/Nav.js'
import Banner from '../components/Banner.js'
import '../assets/style/HomeScreen.css'
import requests from '../Requests.js'
import Row from '../components/Row.js'


function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav /> 

        <Banner />      

        {/* ROW*/}
        <Row 
        title='NETFLIX ORIGINALS' 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow
        /> 
        <Row title='Trending Now' fetchUrl={requests.fetchTrending} /> 
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} /> 
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} /> 
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} /> 
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} /> 
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} /> 
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} /> 
       
    </div>
  )
}

export default HomeScreen