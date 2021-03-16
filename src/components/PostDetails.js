function PostDetails(props) {
  return (
    <div className="post-excerpt">
      <img src={props.location.props.image} alt={props.location.props.id} />
      <h1>{props.location.props.name} </h1>
      <h3>${props.location.props.currentprice} </h3>
      <p>
        <strong> Last Updated:</strong> {props.location.props.lastupdated}
      </p>
      <p>
        <strong> 24 hr High: </strong> {props.location.props.high}
      </p>
      <p>
        <strong> 24 hr Low: </strong> {props.location.props.low}
      </p>
      <p>
        <strong> Price Change 24 hr: </strong>
        {props.location.props.pricechange}
      </p>
    </div>
  );
}

export default PostDetails;
