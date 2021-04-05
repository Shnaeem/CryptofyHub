import '../MainCss/faqs.css'

function Faqs() {

  return (
    <div className="faqs-container">
      <h1> Faqs</h1>
      <div className="question-container">
        <h3>What is cryptocurrency?</h3>
        <p>Cryptocurrency is a type of virtual currency that uses cryptography to secure transactions that are digitally recorded on a distributed ledger, such as a blockchain.  A transaction involving cryptocurrency that is recorded on a distributed ledger is referred to as an “on-chain” transaction; a transaction that is not recorded on the distributed ledger is referred to as an “off-chain” transaction.</p>
      </div>

      <div className="question-container">
        <h3>What is market cap?</h3>
        <p>The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market.
        
        <br />Market Cap = Current Price x Circulating Supply.</p>
      </div>

      <div className="question-container">
        
        <h3>What is fully diluted market cap?</h3>
        <p>The market cap if the max supply was in circulation.</p>

        <p>Fully-diluted market cap (FDMC) = price x max supply. If max supply is null, FDMC = price x total supply. if max supply and total supply are infinite or not available, fully-diluted market cap shows.</p>
      </div>

      <div className="question-container">
        <h3>What is volume?</h3>
        <p>A measure of how much of a cryptocurrency was traded in the last 24 hours.</p>
      </div>
      
      <div className="question-container">
        <h3>What is circulating supply?</h3>
        <p>The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market.</p>
      </div>
      
      <div className="question-container">
        <h3>What is max supply?</h3>
        <p>The maximum amount of coins that will ever exist in the lifetime of the cryptocurrency. It is analogous to the fully diluted shares in the stock market.
          If this data has not been submitted by the project or verified by the CMC team, max supply shows.</p>
      </div>

      <div className="question-container">
        <h3>What is total supply?</h3>
        <p>The amount of coins that have been already created, minus any coins that have been burned. It is analogous to the outstanding shares in the stock market.
          If this data has not been submitted by the project or verified by the CMC team, total supply shows.</p>
      </div>

    </div>
  )
}

export default Faqs;