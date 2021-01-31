import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
            </div>
            <div className={classes.profile_ava}>
                <img src="https://w3schoolsrus.github.io/howto/img_avatar.png" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>

    );
}

export default Profile;