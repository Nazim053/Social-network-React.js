import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

 const DialogItem = (props) => {
    return (
      <NavLink
           className= {s.liItem} to= {'/message/' + props.id}><li className={s.liItem}> {props.name} </li>
          </NavLink>
    )
  
 }

 const Message = (props) => {
    return (
   <div className= {s.userMessage}>{props.textMessage}</div>
    )}

    const DialogUser = [
       {name : 'Denis', id : 1},
       {name : 'Maks', id : 2},
       {name : 'Roma', id : 3},
       {name : 'Gmail', id :4},
       {name : 'Friends group', id : 5}]

    const DialogUserMessage = [
      { message: 'Message1'},
      { message: 'Message2'},
      { message: 'Message3'},
      { message: 'Message4'},
      { message: 'Message5'}]

      let dialogItemElement = DialogUser.map( dialog => <DialogItem id = { dialog.id } name = { dialog.name } /> );  // преобразование массива 

      let messageDateItem = DialogUserMessage.map (messageText => <Message textMessage = { messageText.message } /> );  // преобразование массива 
 
    

     

 const Dialogs = () => {
    return (
       <div className={s.container}>
          <div className={s.flex_box}>
             <div>
                <ul className={s.item}>

                   {dialogItemElement}

                </ul>
             </div>
             <div className={s.message}>
                {messageDateItem}
             </div>
             
          </div>
       </div> 
    )
 } 

 export default Dialogs;
