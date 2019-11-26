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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name="Artem" id="1"/>
                <DialogsItem name="Dima" id="2"/>
                <DialogsItem name="Oleg" id="3"/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='Aloha'/>
                <Message message='Hello'/>
            </div>
        </div>
    )
};

export default Dialogs;