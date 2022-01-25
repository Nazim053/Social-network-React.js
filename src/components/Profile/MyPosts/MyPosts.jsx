import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';


const PostItem = [
    {postText:'Hi, how are you?', likes:344},
    {postText:'It is first post', likes: 1232},
    {postText:'How are you?', likes:94}]

    let PostItemMap = PostItem.map(postText => <Post post={PostItem[0].postText} like = {PostItem[0].likes} /> )

const MyPost = () => {

    return (

        <div className={s.myPost}>
            <div className={s.postText}>
                <textarea className={s.textAdd}></textarea>
                <button  className={s.btnAdd}>Запостить</button>
            </div>
            {PostItemMap}
        </div>

    );


}

export default MyPost;