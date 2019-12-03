import React from 'react'
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = (props) => {

    let pastElements = props.posts.map(
        post => <Post message={post.message}/>
    );

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
                { pastElements }
            </div>
        </div>
    )
};

export default MyPosts;