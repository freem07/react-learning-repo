import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {


    return (
        <div>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
            </div>

            <ProfileInfo />
            <MyPosts posts={props.state.posts}
                     dispatch={props.dispatch}
                     newPostText={props.state.newPostText}
                      />
        </div>

    );
}

export default Profile;