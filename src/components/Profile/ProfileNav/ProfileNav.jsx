import React from 'react';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import authContext from '../../../store/auth-context';
import ProfileInfo from './ProfileInfo';

const ProfileNav = () => {
    const {logout} = useContext(authContext)
    const navigate = useNavigate()

    window.logoutHandler=logout;

    const handleLogin = () => {
        logout();
        navigate('/home')
    }
    return (
        <div className='profile-nav hide-on-print'>
            <ProfileInfo />
            <div className='profile-nav-inner'>
            <ul>
                <li>
                    <NavLink
                        to="/profile/order"
                        className={({ isActive }) => (isActive ? "link-active" : "link")}
                    >
                   <i className="fa fa-history new-p" aria-hidden="true"></i>
                    Order History
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profile/edit"
                        className={({ isActive }) => (isActive ? "link-active" : "link")}
                    >
                        <i className="fa fa-pencil-square-o new-p" aria-hidden="true"></i>
                    Edit Profile
                    </NavLink>
                </li>
                <button onClick={handleLogin} className='sign-out'><i className="fa fa-sign-out" aria-hidden="true"></i> LogOut</button>
            </ul>
            </div>
        </div>
    );
};

export default ProfileNav;