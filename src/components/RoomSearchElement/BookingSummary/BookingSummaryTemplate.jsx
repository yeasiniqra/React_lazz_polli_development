import React from 'react';
import { humanizeDate } from '../../../lib/utils';


const BookingSummaryTemplate = ({summeryItem,removeClickHandler,totalAmount}) => {

    const arrivalDate1 = new Date(summeryItem.arrivalDate);
    const departureDate2 = new Date(summeryItem.departureDate);

    const diffTime = Math.abs(departureDate2 - arrivalDate1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return (
        <>
            <div className="summery-main-grid">
                <div className="smy-date">
                    <span> Dates : <small>{humanizeDate(summeryItem.arrivalDate)}</small> - <small>{humanizeDate(summeryItem.departureDate)}</small> </span>
                </div>
                <div className="super-flex-item">
                    <div className="spk-left">
                        <h6>For {diffDays} Night</h6>
                        <p>{summeryItem.Name}</p>
                        <p>
                         {summeryItem.Type === 'ROOM' ? summeryItem.AdultPerRoom * summeryItem.quantity : ''}  
                         {summeryItem.Type === 'ROOM' ? 'Adults -' : 'Full'}  
                         {summeryItem.Type === 'ROOM' ? summeryItem.ChildrenPerRoom * summeryItem.quantity : ''} 
                         {summeryItem.Type === 'ROOM' ? 'Child ' : ''}  
                         - {summeryItem.quantity}  
                         {summeryItem.Type === 'ROOM' ? 'Room ' : 'House '} 
                         
                        
                         </p>
                        <button><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                    </div>
                    <div className="spk-right">
                        <span onClick={removeClickHandler.bind(null, summeryItem)}><i className="fa fa-times" aria-hidden="true"></i></span>
                        <h5>BDT <span>{summeryItem.amount}</span></h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingSummaryTemplate;