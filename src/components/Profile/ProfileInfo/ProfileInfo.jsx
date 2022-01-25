

import Cont from './ProfileInfo.module.css'

const ProfileInfo = () => {

    return (

        <div className={Cont.contentProfil}>


            <div className={Cont.profil}>
                <div className={Cont.imgProfil}>
                    <img src="https://media.creativemornings.com/uploads/user/avatar/246995/151103_Self_Portrait_50x50_72.jpg" />
                </div>
                <div className={Cont.infoProfil}>
                    <ul>
                        <h3>Nazim I.</h3>
                        <h4>Date of Birth: 2 january</h4>
                        <h4>City: Rostov-on-Don</h4>
                        <h4>Edication: no</h4>
                        <h4 href="https://www.aquapulse.biz">Web Site: www.aquapulse.biz</h4>
                    </ul>
                </div>

            </div>






        </div>



    );


}

export default ProfileInfo;
