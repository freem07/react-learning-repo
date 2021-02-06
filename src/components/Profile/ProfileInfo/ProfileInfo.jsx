import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.profile_ava}>
                <img src="https://w3schoolsrus.github.io/howto/img_avatar.png" />
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>

    );
}

export default ProfileInfo;