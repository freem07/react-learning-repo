import React from 'react';
import { Redirect } from 'react-router';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    if(!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div>
           {/*  <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
            </div> */}

            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer/>
        </div>

    );
}

export default Profile;