
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
export const getPosts = () => ({
    type: GET_POSTS,
})

export const getPostsSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts,

})

export const getPostsFailure = () => ({
    type: GET_POSTS_FAILURE,

})


export function fetchList(){
    return async (dispatch) => {
        dispatch(getPosts())


     try{
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            const data = await response.json()
            dispatch(getPostsSuccess(data));


        }catch(error){
            dispatch(getPostsFailure())
            console.log(error);
        }
    }
}