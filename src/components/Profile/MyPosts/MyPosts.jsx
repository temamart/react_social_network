import React from 'react'
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Post 1"/>
                <Post message="Post 2"/>
                <Post message="Post 4"/>
            </div>
        </div>
    )
};

export default MyPosts;