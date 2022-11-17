import React from 'react';
import ProfilePage from '../components/Profile/ProfilePage';
import { useTitle } from '../hooks/UseTitle';

const Profile = () => {
    useTitle('Profile')
    return (
        <div>
            <ProfilePage />
        </div>
    );
};

export default Profile;