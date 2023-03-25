import React from 'react';
import { humanizeDate } from '../../../lib/utils';


const CheckOutSummeryTemplate = ({room, index,removeClickHandler }) => {
    return (
        <>
            <div className='summery-flexc'>
                <h2>NO : {index + 1}</h2>
                <span onClick={removeClickHandler.bind(null, room)}><i className="fa fa-times" aria-hidden="true"></i></span>
            </div>    
            <div className="smy-date">
                <div className="check-in-out">
                    <h6>Check-In</h6>
                    <small>{humanizeDate(room.arrivalDate)}</small>
                    <h5>Stay</h5>
                </div>
                <div className="check-in-out">
                    <h6>Check-Out</h6>
                    <small>{humanizeDate(room.departureDate)}</small>
                </div>
            </div>
            <div className="super-flex-item">
                <div className="spk-left">
                    <p><span>Name : </span>{room.Name}</p>
                    <p>
                        {room.Type === 'ROOM' ? room.adultsCount * room.quantity || 0 : ''}
                        {room.Type === 'ROOM' ? 'Adults' : 'Full'}  - 
                        {room.quantity} - 
                        {room.Type === 'ROOM' ? 'Room -' : 'House'} 
                        {room.Type === 'ROOM' ? room.childrenCount * room.quantity || 0 : ''}
                        {room.Type === 'ROOM' ? 'Child' : ''}
                    </p>
                </div>
            </div>
            <div className="special-conditions-check">
                <div className="room-chargeq">
                    <div className="room-chargeq-single">
                        <small>Room Charges </small>
                        <small>BDT {room.amount}</small>
                    </div>  
                </div>
            </div>
         </>
    );
};

export default CheckOutSummeryTemplate;