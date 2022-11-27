import React from 'react';
import avater from '../../../images/user2.png'
const ProfileInfo = () => {
    return (
        <div className='profile-info'>
            <div className='profile-img'>
                <img src={avater} alt="profile lazz polli" />
                <h2>Jak Ma</h2>
            </div>
        </div>
    );
};

export default ProfileInfo;