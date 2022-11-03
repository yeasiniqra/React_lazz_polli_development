import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ProfileInfo from './ProfileInfo';

const ProfileNav = () => {
    return (
        <div className='profile-nav'>
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
                <button className='sign-out'><i className="fa fa-sign-out" aria-hidden="true"></i> LogOut</button>
            </ul>
            </div>
        </div>
    );
};

export default ProfileNav;