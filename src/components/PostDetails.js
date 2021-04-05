import '../MainCss/lodcdetails.css';

function PostDetails(props) {
  return (
    <div className="details-container">
      <div className="coin-headings">
        <img className="logos" src={props.location.props.image} alt={props.location.props.id} />
        <h1 className="name">{props.location.props.name} </h1>
      </div>
      <div className="coins-details">
        <h2>Details:</h2>
        <h3 className="current-price">
        <strong> Current Price: </strong> ${props.location.props.currentprice} </h3>
        
        <p className="high">
          <strong> 24 hr High: </strong> ${props.location.props.high}
        </p>
        <p className="low">
          <strong> 24 hr Low: </strong> ${props.location.props.low}
        </p>
        <p className="price-change">
          <strong> Price Change 24 hr: </strong>
          {props.location.props.pricechange}
        </p>
        <p className="last-updated">
          <strong> Last Updated:</strong> {props.location.props.lastupdated}
        </p>

      </div>
      
    </div>
  );
}

export default PostDetails;
