import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

/*     let posts = [
        { id: 1, message: "Hi, how are you?", likesCount: 1, },
        { id: 2, message: "It's my first posts", likesCount: 100500 },

    ]; */

    let postsElement = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

    return (
            <div className={classes.postsBlock}>
                 <h3>MyPosts</h3>
                <div>
                    <div>
                    <textarea></textarea>
                    </div>
                    <div>
                    <button>Add post</button>
                    </div>
                </div>
                <div className={classes.posts}>
                    {postsElement}
                </div>

            </div>

    );
}

export default MyPosts;