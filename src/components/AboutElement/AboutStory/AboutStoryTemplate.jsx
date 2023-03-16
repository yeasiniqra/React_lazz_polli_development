import React from 'react';
import { useState } from "react";
import Suspense from '../../Sheared/Suspense/Suspense';

const AboutStoryTemplate = ({item}) => {
    const [loading, setLoading] = useState(true);
    const handleImageLoad = () => {
        setLoading(false);
    };
    return (
        <>
            {loading && (
                <div className="loader">
                    <Suspense />
                </div>
            )}
            <div className="ab-img-flex">
                <img src={item.image} alt="resort lazz polli" onLoad={handleImageLoad} />
            </div>
        </>
    );
};

export default AboutStoryTemplate;