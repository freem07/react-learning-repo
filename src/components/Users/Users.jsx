import axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/def-ava.png';

let Users = (props) => {
    if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
        props.setUsers(response.data.items)
    })
    }
/*     if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://image.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg',
                followed: false, fullName: 'Dmitry', status: 'I am a boss ', location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 2, photoUrl: 'https://image.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg',
                followed: true, fullName: 'Sasha', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 3, photoUrl: 'https://image.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg',
                followed: false, fullName: 'Andrew', status: 'I am a boss too', location: { city: 'Kyiv', country: 'Ukraine' }
            },

        ])
    }
 */
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto } className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }} >unFollow</button>
                            : <button onClick={() => { props.follow(u.id) }} >Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name} </div>
                        <div>{u.status} </div>
                    </span>
                    <span>
                        <div>{`u.location.country`} </div>
                        <div>{`u.location.city`} </div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;