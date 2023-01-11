import React from 'react';
import { useContext } from 'react';
import authContext from '../../../store/auth-context';
const ProfileInfo = () => {
    const {profile} = useContext(authContext)
    const {firstName,lastName,phone} = profile
    return (
        <div className='profile-info'>
            <div className='profile-img'>
                <h2>{firstName} {lastName}</h2>
                <p>{phone}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;