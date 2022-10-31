import React from 'react';

const BookingSummaryTemplate = ({summeryItem,removeClickHandler}) => {
        //get current date
        const today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return (
        <>
            <div className="summery-main-grid">
                    <div className="smy-date">
                        <span> Dates : <small>{date}</small> - <small>{date}</small> </span>
                    </div>
                    <div className="smy-date">
                        <span> Night : <small>{summeryItem.priceNight}</small></span>
                    </div>
                    <div className="super-flex-item">
                        <div className="spk-left">
                            <p>{summeryItem.title}</p>
                            <p> {summeryItem.adults} Adults {summeryItem.child} Child {summeryItem.room} Room</p>
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