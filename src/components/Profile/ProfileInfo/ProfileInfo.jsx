import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }


    return (
        <div>
            <div /* className={classes.profile_ava} */>
                <img src={props.profile.photos.large} />
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>

        </div>
        
    );
}

export default ProfileInfo;