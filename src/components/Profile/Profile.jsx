import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://chto-eto-takoe.ru/uryaimg/32574385521dd1847f7d1e5b940491ef.jpg'/>
            </div>
            <div>
                ava + descriptions
            </div>
            <MyPosts/>
        </div>
    )
};

export default Profile;