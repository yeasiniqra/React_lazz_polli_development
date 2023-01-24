import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTitle } from '../../../hooks/UseTitle';
import { GET_ROOM_BOOKING } from '../../../lib/endpoints';
import { getV2 } from '../../../services/http-service-v2';
import OrderHistoryTemplate from './OrderHistoryTemplate';

const OrderHistory = () => {
    useTitle('Order History')
    const [booked, setBooked] = useState([]);
    const mounted = useRef(false);
   
    const handleGetBooking = () => {
        getV2({ url: GET_ROOM_BOOKING(10,1, "all") }).then((data) => {
            if (!data.IsError) {
                setBooked(data.Data.Data)
            } else {
              toast.warning(`${data.Msg}`);
            }
          }).catch(err => {
            toast.warning(err?.toString());
          }).finally(() => {
           
          });
    }

    useEffect(() => {
        if (!mounted.current) {
            handleGetBooking();
            mounted.current = true;
        }
    }, [mounted]);


    return (
        <>
        <div className='order-history'>
            <div className='order-history-header'>
                <span>Order Id</span>
                <span>Check In</span>
                <span>Check Out</span>
                <span>Status</span>
                {/* <span>Room Type</span> */}
                <span>Pax Details</span>
                <span>Amount</span>
            </div>
            {
                booked.map(book => <OrderHistoryTemplate book={book} key={book.Code
                } /> )
            }
           </div> 
        </>
    );
};

export default OrderHistory;