import React, { useEffect } from 'react'
import HomeScreen from './pages/HomeScreen.js'
import LoginPage from './pages/LoginPage.js'
import ProfileScreen from './pages/ProfileScreen.js'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
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
        dispatch(logout())
      }
    })

    return unsubscribe
  }, [dispatch])

  return (
    <div className="App">
      <Router>
      {!user ? (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/login" element={<Navigate to="/" replace />} />
        </Routes>
      )}
      </Router>
    </div>
  )
}

export default App
