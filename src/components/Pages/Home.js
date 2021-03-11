import React, { useState, useEffect } from "react"
import axios from "axios"

function Home() {
  const [home, setHome] = useState([])
  const url = "https://api.coingecko.com/api/v3/search/trending"

  const displayTrending = async () => {
    const response = await axios.get(url)
    console.log(response)
    setHome(response)
  }
  useEffect(() => {
    displayTrending()
  }, [])



  return (
    <div>
      <h1> Home</h1>
      <h3>{home.response}</h3>
    </div>
  )
}

export default Home;