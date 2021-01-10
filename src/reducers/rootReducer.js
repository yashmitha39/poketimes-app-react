const initState = {
    posts: [
        {id:1, title:"Love", body: "Love is red!"},
        {id:2, title:"Pride", body: "Pride is purple!"},
        {id:3, title:"Lust", body: "Lust is pink!"}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts:newPosts
        };
    }
    return state
    
}

export default rootReducer;