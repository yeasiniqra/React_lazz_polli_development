import React from 'react';
import useAuthGuard from '../../hooks/useAuthGuard';
import ProfileBody from './ProfileBody/ProfileBody';
import ProfileNav from './ProfileNav/ProfileNav';

const ProfilePage = () => {
    useAuthGuard()
    return (
        <div className='profile-grid'>
            <ProfileNav />
            <ProfileBody />
        </div>
    );
};

export default ProfilePage;