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

    let dialogsElements = props.dialogs.map(
        dialogs => <DialogsItem name={dialogs.name} id={dialogs.id}/>
    );

    let messagesElements = props.messages.map(
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