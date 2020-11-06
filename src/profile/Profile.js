import React from 'react';
import PropTypes from "prop-types";

const Profile = (props) => {
const {alert, FullName, profession, bio, children}= props;
    return (


        <div className='container' style={{ color: 'gray', textAlign: 'center' }}>
            
           <div>
               <button onClick={alert}>Click to verify User Name</button>
           </div>
            <h1>
                Hello I am {FullName}
            </h1>
            <h2>
                I am a {profession}
            </h2>
            <h3>
                {bio}
            </h3>
            {children}


        </div>
    );
}
Profile.defaultProps={
FullName: 'Whatever',
profession: 'Looking for a job'

}


Profile.propTypes = {
   
    FullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    alert: PropTypes.func
} 




export default Profile;


