import React from 'react'
import '../assets/style/Banner.css'

function Banner() {

    function truncate(string, n) {
            return string?.length > n ? string.substr(0, n - 1) + '... ' : string
    }

  return (
    <header className='banner' 
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: "center center"
    }}
    >

    <div className='banner-contents'>
        <h1 className='banner-title'>Movie Name</h1>
        <div className='banner-buttons'>
            <button className='banner-button'>Play</button>
            <button className='banner-button'>My List</button>
        </div>
        <h1 className='banner-description'>
           {truncate(`this is a test desc this is a test desc this is a test desc
           this is a test desc this is a test desc this is a test desc this is a test desc
           this is a test desc this is a test desc this is a test descthis is a test desc
           this is a test descthis is a test descthis is a test descthis is a test desc
           this is a test descthis is a test descthis is a test descthis is a test desc
           this is a test descthis is a test descthis is a test descthis is a test desc`, 150)} 
           </h1>
    </div>
    <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner