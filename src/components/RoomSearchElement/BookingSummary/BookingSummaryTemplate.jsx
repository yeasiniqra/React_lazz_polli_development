import React from 'react';
import { humanizeDate } from '../../../lib/utils';


const BookingSummaryTemplate = ({summeryItem,removeClickHandler}) => {

    return (
        <>
            <div className="summery-main-grid">
                    <div className="smy-date">
                        <span> Dates : <small>{humanizeDate(summeryItem.arrivalDate)}</small> - <small>{humanizeDate(summeryItem.departureDate)}</small> </span>
                    </div>
                    <div className="smy-date">
                        <span> Night : <small>{summeryItem.priceNight}</small></span>
                    </div>
                    <div className="super-flex-item">
                        <div className="spk-left">
                            <p>{summeryItem.title}</p>
                            <p> {summeryItem.adultsCount * summeryItem.quantity} Adults {summeryItem.childrenCount * summeryItem.quantity} Child {summeryItem.room * summeryItem.quantity} Room</p>
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