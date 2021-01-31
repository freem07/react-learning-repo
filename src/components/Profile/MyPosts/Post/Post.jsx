import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (

        <div className={classes.item}>
            <img src="https://hornews.com/upload/images/blank-avatar.jpg" alt="ava" />
            Post #1
            <div>
                <span>like</span>
            </div>

        </div>


    );
}

export default Post;