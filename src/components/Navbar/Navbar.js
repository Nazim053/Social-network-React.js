 
 import s from './navbar.module.css';
 
 const Navbar = () =>{

return (

   
     <nav className={s.nav}>
     <div   className={s.item}><a href='/profile'>Profile</a></div>
     <div className={s.item}><a  href='/message'>Message</a></div>
     <div  className={s.item}><a href='/music'>Music</a></div>
     <div  className={s.item}><a href='/files'>Files</a></div>
    </nav>


    );
  
   
    

 }

 export default Navbar;