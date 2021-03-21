import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router';

const Dialogs = (props) => {

    let state = props.messagesPage

    let dialogsElement = state.dialogsData
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava} key={DialogItem.id} /> );

    let messagesElements = state.messagesData
    .map( m => <Message message={m.message} key={m.id} />)

    let newMessageText = state.newMessageText;

    let addMessage = () => {
        props.addMessage()
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);    
    };


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                <div className={classes.my_messages}>
                {messagesElements}
                </div>
                <div className={classes.message_friend} >
                {messagesElements}
                </div>
                <div>
                    <textarea onChange={onMessageChange} value={newMessageText} ></textarea>
                </div>
                <div>   
                    <button onClick={addMessage} >Send Message</button>
                </div> 
            </div>


        </div>
    );
}

export default Dialogs;