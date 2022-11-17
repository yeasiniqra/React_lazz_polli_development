import React from 'react';
import { Link } from 'react-router-dom';
import { humanizeDate } from '../../../lib/utils';


const CheckOutSummeryTemplate = ({room, index}) => {
  
    
    return (
        <>
                <h2>Room : {index + 1}</h2>
                <div className="smy-date">
                        <div className="check-in-out">
                            <h6>Check-In</h6>
                            <small>{humanizeDate(room.arrivalDate)}</small>
                            <h5>1 Night Stay</h5>
                            <div className="common-btn book-search-btn smr-book-search-btn">
                                <button><Link to='/searchroom'>Change Dates</Link></button>
                            </div>
                        </div>
                        <div className="check-in-out">
                            <h6>Check-Out</h6>
                            <small>{humanizeDate(room.departureDate)}</small>
                        </div>
                    </div>
                <div className="super-flex-item">
                    <div className="spk-left">
                        <p><span>Rateplan Name : </span>{room.title}</p>
                        <p><span>Pax Details : </span> {room.adultsCount * room.quantity} Adults {room.childrenCount * room.quantity} Child</p>
                    </div>
                </div>
                <div className="special-conditions-check">
                    <span className='tooltip'> Special conditions : <small className='tooltiptext'>Full prepayment is needed for booking under this rate</small> </span>
                    <small>Breakfast is included in the room rates</small>
                    <div className="room-chargeq">
                        <div className="room-chargeq-single">
                            <small>Room Charges </small>
                            <small>BDT {room.amount}</small>
                        </div>  
                        {/* <div className="room-chargeq-single">
                            <small>Taxes & Fees </small>
                            <small>BDT {newTax} </small>
                        </div> */}
                    </div>
                </div>
         </>
    );
};

export default CheckOutSummeryTemplate;