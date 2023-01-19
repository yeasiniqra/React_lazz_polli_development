import React from 'react';
import { humanizeDate } from '../../../lib/utils';


const CheckOutSummeryTemplate = ({room, index}) => {
    // console.log(room);
    return (
        <>
                <h2>NO : {index + 1}</h2>
           
   
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
                        <p><span></span> {room.adultsCount * room.quantity} Adults {room.childrenCount * room.quantity} Child</p>
                    </div>
                </div>
                <div className="special-conditions-check">
                    {/* <span className='tooltip'> Special conditions : <small className='tooltiptext'>Full prepayment is needed for booking under this rate</small> </span>
                    <small>Breakfast is included in the room rates</small> */}
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