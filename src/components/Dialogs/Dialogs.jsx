import React from "react"
import s from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Artem
                </div>
                <div className={s.dialog}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Oleg
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