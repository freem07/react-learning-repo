import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";



const DialogItem = (props) =>{

let path = '/dialogs/' + props.id;    
    return(
            <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to={path}>{props.name}</NavLink>
            </div>
    );
}

const Message = (props) =>{

    return(
        <div className={classes.message}>{props.message}</div>
    );
}




const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Nikolay"},
        {id: 3, name: "Yulia"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"},
    ];

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"},
    ];

    
    let dialogsElement = dialogsData
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );

    let messagesElements = messagesData
    .map( m => <Message message={m.message} />)


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>


        </div>
    );
}

export default Dialogs;