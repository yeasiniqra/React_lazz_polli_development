import React from 'react';
import { Routes, Route} from "react-router-dom";
import Edit from '../Edit/Edit';
import Invoice from '../Invoice/Invoice';
import OrderHistory from '../OrderHistory/OrderHistory';

const ProfileBody = () => {
    return (
        <>
            <div className='profile-body'>
                <Routes>
                    <Route index element={<OrderHistory /> } />
                    <Route path="/order" element={<OrderHistory />} />
                    <Route path="/edit" element={<Edit />} />
                    <Route path="/inv" element={<Invoice />} />
                </Routes>
            </div>
        </>  
    );
};

export default ProfileBody;