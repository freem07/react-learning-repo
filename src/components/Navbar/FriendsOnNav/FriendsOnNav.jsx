import React from 'react';
import classes from './FriendsOnNav.module.css';
import { NavLink } from "react-router-dom";



const FriendsOnNav = (props) => {

         let path = '/ '; 
        return (<div>

                        <div className={classes.dialog}>
                        <img className={classes.avatarDialog} src={props.ava} />
                             
                               <div className={classes.friend}>  <NavLink to={path} activeClassName={classes.activeDialog}> {props.name} </NavLink></div>

                        </div>
        </div>
        );
}


export default FriendsOnNav;