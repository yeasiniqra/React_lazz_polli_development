import React from 'react';
import FindHroomTemplate from './FindHroomTemplate/FindHroomTemplate';
import { getHomeMenuImages } from '../../services/AppDataService';

const FindHroom = () => {
    const menuIamge = getHomeMenuImages();
    return (
        <>
            <FindHroomTemplate menuIamge={menuIamge} />
        </>
    );
};

export default FindHroom;