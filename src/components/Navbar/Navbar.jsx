import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import FriendsOnNav from './FriendsOnNav/FriendsOnNav';

const Navbar = (props) => {

/*      let friendElement = props.state.sidebar.friendsOnSidebar
        .map(friend => <FriendsOnNav name={friend.name} id={friend.id} ava={friend.ava} /> ); 
 */
    return (
        <nav className={classes.Nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.activeLink}>Users: </NavLink>
            </div>
            <div className={classes.friends}>
                <NavLink to='/friends' activeClassName={classes.activeLink} >Friends :</NavLink>
                <div>
                   {  /* {friendElement} */ }
                </div>
            </div>

        </nav>
    );
}

export default Navbar;