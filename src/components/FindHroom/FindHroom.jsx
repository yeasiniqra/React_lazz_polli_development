import React from 'react';
import FindHroomTemplate from './FindHroomTemplate/FindHroomTemplate';
// import { getFindHroom } from "../../services/data-service";
import { getHomeMenuImages } from '../../services/AppDataService';

const FindHroom = () => {
    // const FindHroom = getFindHroom();
    const menuIamge = getHomeMenuImages();
    console.log(menuIamge)
    return (
        <>
            <FindHroomTemplate menuIamge={menuIamge} />

            {/* menuIamge2.map((menuIamge, index) =>  <FindHroomTemplate menuIamge={menuIamge} />) */}
        </>
    );
};

export default FindHroom;