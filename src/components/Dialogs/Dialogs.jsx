import React from "react"
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{ props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={ s.message }>{ props.message }</div>
    )
};

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Oleg'},
    ];

    let dialogsElements = dialogs.map(
        dialogs => <DialogsItem name={dialogs.name} id={dialogs.id}/>
    );

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Aloha'},
        {id: 3, message: 'Hello'},
    ];

    let messagesElements = messages.map(
         message => <Message message={message.message}/>
    );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
};

export default Dialogs;