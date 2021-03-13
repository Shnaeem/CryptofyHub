export const Post = ({post}) => {


    return(
        <article className="post-excerpt"> 
            <h2>{post.name} </h2>
            <p>${post.current_price} </p>
        </article>
    )
}