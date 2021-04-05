import axios from "axios";
import React, { useState, useEffect } from "react";
import '../MainCss/home.css';

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
      <div className="Main">
          <h1 className="trendheading"> Top 7 Trending Currencies:</h1>
          <div className="currency-container">
            {data.map((coins, index) => {
                return (
                <div className="currencylist" key={index}>
                    <h2 className="coin-name">{coins.item.name} </h2> 
                    <div className="coin-details">
                      <h3 className="mkt-cap"> Market Cap Rank: {coins.item.market_cap_rank} </h3>
                      <h3 className="symbol"> Symbol: {coins.item.symbol} </h3>
                    </div>
                </div>
                ) 
              })}
          </div>
      </div>
    )
  }
  
  export default Home;