import React, { useRef } from 'react'
import '../assets/style/SignUp.css'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate()

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (ev) => {
    ev.preventDefault()

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const signIn = (ev) => {
    ev.preventDefault()
    

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className="signUp">
      <form>
        <h1>Sign Up</h1>
        <input ref={emailRef} type="email" placeholder="Email Address" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <button type="submit" onClick={register}>
          Sign Up
        </button>
        <h4>
          <span className="signUp-grey-span">Already in Netflix? </span>
          <span className="signUp-link" onClick={signIn}>
            Sign in now.
          </span>
        </h4>
      </form>
    </div>
  )
}

export default SignUp
