import React from 'react';
import { humanizeDate } from '../../../lib/utils';


const CheckOutSummeryTemplate = ({room, index,removeClickHandler, setDataCount }) => {
    const arrivalDate1 = new Date(room.arrivalDate);
    const departureDate2 = new Date(room.departureDate);

    const diffTime = Math.abs(departureDate2 - arrivalDate1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // console.log(room)
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
                    
                </div>
                <div className="check-in-out">
                    <h6>Check-Out</h6>
                    <small>{humanizeDate(room.departureDate)}</small>
                </div>
            </div>
            <div className="super-flex-item">
                <div className="spk-left">
                    <h6>Stay For {diffDays} Night</h6>
                    <p><span>Name : </span><b>{room.Name}</b></p>
                    <p>
                        {room.Type === 'ROOM' ? room.AdultPerRoom * room.quantity : ''}
                        {room.Type === 'ROOM' ? 'Adults -' : 'Full'}  
                        {room.Type === 'ROOM' ? room.ChildrenPerRoom * room.quantity : ''} 
                        {room.Type === 'ROOM' ? 'Child' : ''}
                        - {room.quantity}   
                        {room.Type === 'ROOM' ? 'Room' : 'House'} 

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