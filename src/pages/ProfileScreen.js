import React from 'react'
import Nav from '../components/Nav'
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PlansScreen from '../pages/PlansScreen.js'

import { auth } from '../firebase'
import '../assets/style/ProfileScreen.css'

function ProfileScreen() {
  const user = useSelector(selectUser)
  const navigate = useNavigate()

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen-body">
        <h1>Edit Profile</h1>
        <div className="profileScreen-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen-details">
            <h2>{user.email}</h2>
            <div className='profileScreen-plans'>
              <h3>Plans</h3>
              <PlansScreen/>
              <button 
              onClick={() => auth.signOut(navigate("/login"))}
              className='profileScreen-logout-btn'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
