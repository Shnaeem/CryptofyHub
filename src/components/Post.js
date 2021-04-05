import { Link } from "react-router-dom";
import '../MainCss/lodc.css';

export const Post = ({ post }) => {
  return (
    <Link
      to={{
        pathname: "/postdetails",
        props: {
          id: post.id,
          name: post.name,
          image: post.image,
          currentprice: post.current_price,
          lastupdated: post.last_updated,
          high: post.high_24h,
          low: post.low_24h,
          pricechange: post.price_change_24h,
        },
      }}
    >
      <div className="post-excerpt listings">
        <img className="coin-image" src={post.image} alt={post.id} />
        <h1>{post.name} </h1>
        <h3>${post.current_price} </h3>
      </div>
    </Link>
  );
};
