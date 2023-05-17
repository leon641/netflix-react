import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/style/Nav.css'

function Nav() {
const [show, handleShow ] = useState(false);
const navigate = useNavigate()

const transitionNavBar = () => {
    if(window.scrollY > 100) {
        handleShow(true) 
    } else {
        handleShow(false)
    }
}

useEffect(() => {
window.addEventListener("scroll",transitionNavBar);
return () => window.removeEventListener("scroll", transitionNavBar)
}, [])
 
  return (
    <div className={`nav ${show && "nav-black"}`}>
        <div className='nav-content'>
        <img 
        onClick={() => navigate("/")}
        className='nav-logo'
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
        alt=''
        />

        <img 
        onClick={() => navigate("/profile")}
        className='nav-avatar'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt=''
        />
        </div>
    </div>
  )
}

export default Nav