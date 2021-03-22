import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
    
    let postsElement = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id} /> );

    let AddPost = (values) =>{
        props.addPost(values.newPostText);        
    };



    const newPostForm = (props) =>{
        return(
            <form onSubmit={props.handleSubmit} >
                <div>
                <Field name="newPostText" component="textarea" placeholder="Write new post" />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        )
    }
    const NewPostFormRedux = reduxForm({form: "newPostForm"})(newPostForm)
    return (
            <div className={classes.postsBlock}>
                 <h3>MyPosts</h3>
                <div>
                    <NewPostFormRedux onSubmit={AddPost} />

                </div>
                <div className={classes.posts}>
                    {postsElement}
                </div>

            </div>

    );
}

export default MyPosts;