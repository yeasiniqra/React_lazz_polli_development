import React, { useRef, useState, useEffect } from 'react';
import Adinfo from './Adinfo';
import Review from './Review';


const RoomReview = ({room}) => {
    // console.log(room)
    const ref = useRef(null);
    const [isActive, setisActive] = useState(false);
    const toggleHandler = () => {
        setisActive((prevState) => !prevState);
      };

      useEffect(() => {
        if (!isActive) {
          ref.current.classList.add("active");
          ref.current.nextElementSibling.classList.remove("active");
        } else {
          ref.current.classList.remove("active");
          ref.current.nextElementSibling.classList.add("active");
        }
      }, [isActive]);  
      
    return (
        <div className="search-room-single-main-tab">
            <div id="niiceeTab">
                <nav className="niiceeTabBtn">
                    <button
                    id="defaultOpen"
                    ref={ref} 
                    className="tablinks" 
                    onClick={toggleHandler}
                    >
                       {room.roomSingle[3].infoTab}
                    </button>
                    <button className="tablinks" onClick={toggleHandler}>
                    {room.roomSingle[3].reviewTab}
                    </button>
                </nav>

                <div className="tabbed niiceeTabContent">
                    {!isActive && <Adinfo room={room} />}
                    {isActive && <Review room={room} />}
                </div>
            </div>
        </div> 
    
    );
};

export default RoomReview;