import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://chto-eto-takoe.ru/uryaimg/32574385521dd1847f7d1e5b940491ef.jpg'/>
            </div>
            <div className={s.descriptionsBlock}>
                ava + descriptions
            </div>
        </div>
    )
};

export default ProfileInfo;