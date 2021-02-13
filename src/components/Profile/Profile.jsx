import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

/*     let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 1,},
        {id: 2, message: "It's my first posts", likesCount: 100500},

    ]; */
 

    return (
        <div>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
            </div>

            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>

    );
}

export default Profile;