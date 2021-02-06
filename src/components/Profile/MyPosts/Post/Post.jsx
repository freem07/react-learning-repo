import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (

        <div className={classes.item}>
            <img src="https://hornews.com/upload/images/blank-avatar.jpg" alt="ava" />
            {props.message}
            <div>
                <span>like </span>{props.likesCount}
            </div>

        </div>


    );
}

export default Post;