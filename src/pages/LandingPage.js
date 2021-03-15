import React from "react"
import { Link } from "react-router-dom"


function LandingPage() {

  return (
    <div className="container">
      <div className="home" >
        <div className="img-container">
          <img src="https://i.imgur.com/mh2x7DI.png" /><br />
        </div>
        <div className="text-container">
          <h2>Welcome to Cryptofy Hub</h2>
          <Link to="/Aboutus"><button className="landButton">Learn About Us</button></Link>
          <Link to="/Home"><button className="landButton">Take Me To Home</button></Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;