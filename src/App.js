import React, { useEffect } from 'react'
import HomeScreen from './pages/HomeScreen.js'
import LoginPage from './pages/LoginPage.js'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { auth } from '../src/firebase.js'
import { useDispatch, useSelector } from 'react-redux'
import { logout, login, selectUser } from './features/userSlice.js'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        )
      } else {
        dispatch(logout)
      }
    })

    return unsubscribe
  }, [])

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  )
}

export default App
