import React from 'react';
import { humanizeDate } from '../../../lib/utils';


const BookingSummaryTemplate = ({summeryItem,removeClickHandler,totalAmount}) => {
    return (
        <>
            <div className="summery-main-grid">
                <div className="smy-date">
                    <span> Dates : <small>{humanizeDate(summeryItem.arrivalDate)}</small> - <small>{humanizeDate(summeryItem.departureDate)}</small> </span>
                </div>
                <div className="super-flex-item">
                    <div className="spk-left">
                        <p>{summeryItem.Name}</p>
                        <p>
                         {summeryItem.Type === 'ROOM' ? summeryItem.AdultPerRoom * summeryItem.quantity : ''}  
                         {summeryItem.Type === 'ROOM' ? 'Adults' : 'Full'}  - 
                         {summeryItem.quantity} - 
                         {summeryItem.Type === 'ROOM' ? 'Room -' : 'House'} 
                         {summeryItem.Type === 'ROOM' ? summeryItem.ChildrenPerRoom * summeryItem.quantity : ''} 
                         {summeryItem.Type === 'ROOM' ? 'Child' : ''}  
                        
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