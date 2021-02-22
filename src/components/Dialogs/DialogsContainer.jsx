import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import StoreContext from '../StoreContext';

const DialogsContainer = (props) => {



    return (<StoreContext.Consumer>  
        {
        (store) => {
            let state = store.getState().messagesPage;


            let addMessage = () => {
                store.dispatch(addMessageActionCreator())
            };
        
            let onMessageChange = (text) => {
                store.dispatch(updateNewMessageTextActionCreator(text))
            };
            return <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} messagesPage={state} />
        }
    }
    </StoreContext.Consumer>
    );
}

export default DialogsContainer;