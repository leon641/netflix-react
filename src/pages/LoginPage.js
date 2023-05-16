import React, { useState } from 'react'
import Signup from '../components/SignUp.js'
import '../assets/style/LoginPage.css'

function LoginPage() {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className="loginPage">
      <div className="login-background">
        <img
          className="login-page-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button
          onClick={() => setSignIn(true)}
          className="btn-loginPage-signIn"
        >
          Sign In
        </button>
        <div className="loginPage-gradient"></div>

        <div className="loginPage-body">
          {signIn ? (
            <Signup />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>

              <div className="loginPage-input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="btn-login-getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginPage
