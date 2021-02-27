import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.profile_ava}>
                <img src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg" />
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>

    );
}

export default ProfileInfo;