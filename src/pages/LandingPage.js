import React from "react"
import { Link } from "react-router-dom"

function LandingPage() {

  return (
    <div className="container">
      <div className="home" >
        <h1> LandingPage</h1>
        <img src="https://i.imgur.com/mh2x7DI.png" />
        <h2>Welcome to Cryptofy Hub</h2>
        <Link to="/Aboutus"><button>Learn About Us</button></Link>
        <Link to="/Home"><button>Take Me To Home</button></Link>
      </div>
    </div>
  )
}

export default LandingPage;