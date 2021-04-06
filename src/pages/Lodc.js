import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../actions/postsActions'
import { Post } from '../components/Post';


const Lodc = ({ dispatch, loading, posts, hasErrors }) => {
 
  useEffect(() => {
    dispatch(fetchList())
  }, [dispatch])

  const renderPosts = () => {
    
    if (loading) return <p>Loading data..</p>
    if (hasErrors) return <p>Unable to display data</p>

    return posts.map((post) => 
      <Post 
        key={post.id} 
        post={post} 
      />
      )
  }

  return (
    <section className="lodc-section">
      <h1 className="heading-lodc">List of Digital Currency</h1>
      {renderPosts()}
    </section>
  )
  
}
const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
})
export default connect(mapStateToProps)(Lodc)