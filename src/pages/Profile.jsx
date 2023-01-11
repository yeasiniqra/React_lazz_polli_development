import React from 'react';
import ProfilePage from '../components/Profile/ProfilePage';
import useAuthGuard from '../hooks/useAuthGuard';
import { useTitle } from '../hooks/UseTitle';

const Profile = () => {
    useAuthGuard();
    useTitle('Profile');

    return (
        <div>
            <ProfilePage />
        </div>
    );
};

export default Profile;