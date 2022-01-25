
import Cont from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';
import MyPost from './MyPosts/MyPosts'

const Profile = () => {

    return (

        <div className={Cont.contentProfil}>


            <ProfileInfo />

            <div className={Cont.avatara}> </div>

            <div className={Cont.infoStatus}>

                <div className={Cont.item}><a>Friends</a></div>
                <div className={Cont.item}><a>Subcsribe</a></div>
                <div className={Cont.item}><a>friend requests</a></div>
                <div className={Cont.item}><a>Exit</a></div>


            </div>

            <MyPost />







        </div>



    );


}

export default Profile;