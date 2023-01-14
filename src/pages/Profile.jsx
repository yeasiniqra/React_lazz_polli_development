import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePage from '../components/Profile/ProfilePage';
import { useTitle } from '../hooks/UseTitle';
import authContext from '../store/auth-context';

const Profile = () => {
    const navigate = useNavigate()
    const {isAuthenticated, isAuthenticating} = useContext(authContext)
    useTitle('Profile');
    if (!isAuthenticated) {
         navigate('/', { replace: true });
    }
    return (
        <div>
            <ProfilePage />
        </div>
    );
};

export default Profile;