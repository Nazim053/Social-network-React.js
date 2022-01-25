import s from './Post.module.css'
const Post = (props) => {

return (


     

      <div className ={s.post}>
      <div className={s.item}>
            <img src='' /> 
            <div className={s.text}>{props.post}</div>
            </div>
            <button className={s.likeBtn}>{props.like} Like</button>
       
      </div>
     
);



}

export default Post;