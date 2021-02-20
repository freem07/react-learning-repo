const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT'

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 1, },
                { id: 2, message: "It's my first posts", likesCount: 100500 },
            ],
            newPostText: 'itiT',
        },
        messagesPage: {
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "Yo" },
                { id: 4, message: "Yo" },
                { id: 5, message: "Yo" },
                { id: 6, message: "Yo" },
            ],
            
            newMessageText: 'test message text',
    
            dialogsData: [
                { id: 1, name: "Dimych", ava: "https://f1.upet.com/A_r2u6uZhnxA_x.jpg"},
                { id: 2, name: "Nikolay", ava: "https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg"},
                { id: 3, name: "Yulia", ava: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png" },
                { id: 4, name: "Sasha", ava: "https://cnet2.cbsistatic.com/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg" },
                { id: 5, name: "Victor", ava: "https://i0.wp.com/www.yugatech.com/wp-content/uploads/2020/09/Facebook-Avatar.jpg?resize=500%2C500&ssl=1" },
                { id: 6, name: "Valera", ava: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" },
            ],
        },
        sidebar: {
            friendsOnSidebar: [
                { id: 1, name: "Dimych", ava: "https://f1.upet.com/A_r2u6uZhnxA_x.jpg"},
                { id: 2, name: "Nikolay", ava: "https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg"},
                { id: 3, name: "Yulia", ava: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png" },
            ],
        },
    
        },
    _callSubscriber() {
            console.log('State changed');
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }, 



    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
    
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE'){
            let newMessage = {
                id: 7,
                message: this._state.messagesPage.newMessageText,
            };
            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
         } else if (action.type === 'UPDATE-NEW-MASSAGE-TEXT'){
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
         }
        

    },
};


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text,  
});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({
        type: UPDATE_NEW_MASSAGE_TEXT,
        newText: text,
});


export default store;
window.store = store;