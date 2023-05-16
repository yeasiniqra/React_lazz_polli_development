import React from 'react';
import { useNavigate } from 'react-router-dom';
import { humanizeDate } from '../../../lib/utils';

const OrderHistoryTemplate = ({book}) => {
    const navigate = useNavigate();
    const {Code, PayableAmount, Quantity, ReleaseDate, ReservationDate, Status,Night, Paid, ItemCount, Type, Duration} = book
    // const paidRound = Math.round(Paid)
    const dueAmount = PayableAmount - Paid

    //Note : onClick evt add future if client need this - only need add onClick div 
    const handleInvoice = () => {
        navigate(`${Code}`)
    }

    function convertDurationToHoursMinutes(durationString) {
        const duration = parseFloat(durationString);
      
        if (isNaN(duration)) {
          return "";
        }
      
        const hours = Math.floor(duration);
        const minutes = Math.round((duration % 1) * 60);
      
        if (hours > 0 && minutes > 0) {
          return `${hours} hour ${minutes} min`;
        } else if (hours > 0) {
          return `${hours} hour`;
        } else {
          return `${minutes} min`;
        }
      }
      
    //const formattedDuration = convertDurationToHoursMinutes(Duration);
      const formattedDuration = Duration ? convertDurationToHoursMinutes(Duration) : "";
      
    // const typeWiseName = Type === "Pool" ? `${Duration}- Duration` : `Night - ${Night}`
    const typeWiseName = Type === "Pool" ? `${formattedDuration}` : 
                         Type === "Hall" ? `${Night} Day` :
                         Type === "Package" ? `${Night} Day` : `${Night} Night`
    
    return (
        <div  onClick={handleInvoice} className='order-history-body-parent'>
            <div className='order-history-body'>
                <small>#{Code}</small>
                <small>{humanizeDate(ReservationDate)}</small>
                <small>{humanizeDate(ReleaseDate)}</small>
                <small>{typeWiseName}</small>
                <small>{Status}</small>
                <small>{Quantity}</small>
                <small>{ItemCount}</small>
                <small>{PayableAmount} tk</small>
                <small>{dueAmount} tk</small>
                <small>{Paid} tk</small>
            </div>
       </div>
    );
};

export default OrderHistoryTemplate;