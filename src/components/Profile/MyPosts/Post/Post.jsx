import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://img.icons8.com/carbon-copy/2x/user.png'/>
            {props.message}
        </div>
    )
};

export default Post;