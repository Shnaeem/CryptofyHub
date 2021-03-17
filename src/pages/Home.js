import axios from "axios";
import React, { useState, useEffect } from "react";

function Home() {

  const [data, setData] = useState([]);

  const getTrendingData = async() =>{
    const output = await axios.get ("https://api.coingecko.com/api/v3/search/trending");
    console.log(output)
    setData(output.data.coins)
  };

  useEffect( ()=>{
    getTrendingData();
}, []);

    return (
      <div>
          <h1> Top 7 Trending Currencies:</h1>
          {data.map((coins, index) => {
              return (
               <div key={index}>
                  <h2>{coins.item.name} </h2> 
                  <h3> Market Cap Rank: {coins.item.market_cap_rank} </h3>
                  <h3> Symbol: {coins.item.symbol} </h3>
              </div>
              ) 
            })}
      </div>
    )
  }
  
  export default Home;