import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileStatus from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    let UserContacts = Object.entries(props.profile.contacts).map(([key,value]) => <li>{key} : {value}</li>)


    return (
        <div>
            <div /* className={classes.profile_ava} */>
                <img src={props.profile.photos.large} />
            </div>
            <div className={classes.descriptionBlock}>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div>About Me:
                    <div>{props.profile.fullName}</div>
                    <div>{props.profile.aboutMe}</div>
                </div>
                <div>Contacts:  
                    <ul>{UserContacts} </ul>
                </div>
                <div>looking for a job: 
                    <div>{props.profile.lookingForAJob}</div>
                    <div>{props.profile.lookingForAJobDescription}</div>
                </div>
            </div>

        </div>

    );
}

export default ProfileInfo;