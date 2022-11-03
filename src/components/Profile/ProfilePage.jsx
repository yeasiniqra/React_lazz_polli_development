import React from 'react';
import ProfileBody from './ProfileBody/ProfileBody';
import ProfileNav from './ProfileNav/ProfileNav';

const ProfilePage = () => {
    return (
        <div className='profile-grid'>
            <ProfileNav />
            <ProfileBody />
        </div>
    );
};

export default ProfilePage;