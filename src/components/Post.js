export const Post = ({post}) => {


    return(
        <div className="post-excerpt"> 
            <img src={post.image} alt={post.id}/>
            <h1>{post.name} </h1>
            <h3>${post.current_price} </h3>
            {/* <p> <strong> Last Updated:</strong> {post.last_updated}</p> */}
            <p> <strong> 24 hr High: </strong> {post.high_24h} </p>
            <p> <strong> 24 hr Low: </strong> {post.low_24h} </p>
            <p> <strong> Price Change 24 hr: </strong> {post.price_change_24h} </p>
            
        </div>  
    )
}