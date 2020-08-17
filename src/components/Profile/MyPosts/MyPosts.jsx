import React from 'react'
import m from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    const myPostData = [
        {text:'Хей, как жизнь?', likeCount: 7},
        {text:'Что нового?', likeCount: 15},
        {text:'Ну шо, кто по пивку??', likeCount: 42}
    ]

    const myPostsElements = myPostData
        .map( (post) => <Post message={post.text} likesCount={post.likeCount} /> )

    return (
        <div className={m.posts}>
            <h5>My posts</h5>
            <input type="text" placeholder={`What's new`} />
            <button className="btn waves-effect waves-light" type="submit" name="action">Send
                <i className="material-icons right">send</i>
            </button>

            <div className={m.item}>

                { myPostsElements }

            </div>
        </div>
    )
}

export default MyPosts