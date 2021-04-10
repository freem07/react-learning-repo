import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";


let state = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 1, },
        { id: 2, message: "It's my first posts", likesCount: 100500 },
    ],
};  

it('new Post should be added', ()=>{

    let action = addPostActionCreator("test text")
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)

})

it('message of Post should be currect', ()=>{


    let action = addPostActionCreator("test text")
    let newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe("test text")
})

it('after delete lenght of post decriment', ()=>{


    let action = deletePost(1)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
})


it(`after delete lenght of post decriment sould be if id is incorrect`, ()=>{


    let action = deletePost(11)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
})
