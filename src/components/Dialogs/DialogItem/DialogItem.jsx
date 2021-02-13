import React from 'react';
import classes from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";



const DialogItem = (props) => {

        let path = '/dialogs/' + props.id;
        return (<div>

                        <div className={classes.dialog + ' ' + classes.active}>
                        <img className={classes.avatarDialog} src={props.ava} />
                               <div className={classes.friend}> <NavLink to={path} activeClassName={classes.activeDialog}>{props.name}</NavLink></div>

                        </div>
        </div>
        );
}


export default DialogItem;