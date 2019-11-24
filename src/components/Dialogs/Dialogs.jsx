import React from "react"
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Artem</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Oleg</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Aloha</div>
                <div className={s.message}>Hello</div>
            </div>
        </div>
    )
};

export default Dialogs;