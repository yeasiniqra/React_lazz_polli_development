import React from 'react';
import { useContext } from 'react';
import authContext from '../../../store/auth-context';
const ProfileInfo = () => {
    const {profile} = useContext(authContext)
    const {FirstName,LastName,Phone} = profile
    return (
        <div className='profile-info'>
            <div className='profile-img'>
                <h2>{FirstName} {LastName}</h2>
                <p>{Phone}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;