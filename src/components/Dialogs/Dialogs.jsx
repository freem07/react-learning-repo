import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {

    let state = props.messagesPage

    let dialogsElement = state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava} key={DialogItem.id} />);

    let messagesElements = state.messagesData
        .map(m => <Message message={m.message} key={m.id} />)

    

    let addMessage = (values) => {
        props.addMessage(values.messageText)
    };

  
    const MessageForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field placeholder="Message..." component="textarea" name="messageText" />
                </div>
                <div>
                    <button>Send Message</button>
                </div>
            </form>
        )
    }
    const MessageReduxForm = reduxForm({form: 'messageDialog'})(MessageForm)

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
                    {/* {messagesElements} */}
                </div>
                <MessageReduxForm onSubmit={addMessage} />
                </div>
        </div>
    );
}

export default Dialogs;