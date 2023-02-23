import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTitle } from '../../../hooks/UseTitle';
import { GET_ROOM_BOOKING } from '../../../lib/endpoints';
import { getV2 } from '../../../services/http-service-v2';
import Suspense from '../../Sheared/Suspense/Suspense';
import OrderHistoryTemplate from './OrderHistoryTemplate';

const OrderHistory = () => {
    const [isLoading, setIsLoading] = useState(false);
    useTitle('Order History')
    const [booked, setBooked] = useState([]);
    const mounted = useRef(false);


    // pagination function
    const [totalPage, setTotalPage] = useState(1);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(12);

   
    const handleGetBooking = () => {
        setIsLoading(true)
        getV2({ url: GET_ROOM_BOOKING(500,page, "all") }).then((data) => {
            if (!data.IsError) {
                setBooked(data.Data.Data)
                setTotalPage(Math.ceil(data.Data.Data.length/size));
                setPage(1);
            } else {
              toast.warning(`${data.Msg}`);
            }
          }).catch(err => {
            toast.warning(err?.toString());
          }).finally(() => {
            setIsLoading(false)
          });
    }

    // const getPageToRender = () => {
    //     var initialPage = [];
    //     for (let i = 1; i <= totalPage; i++) {
    //       initialPage.push(
    //         <div
    //           key={i}
    //           className={page === i ? "actives" : undefined}
    //           onClick={() => setPage(i)}
    //         >
    //           <div className="single-pagination">{i}</div>
    //         </div>
    //       );
    //     }
      
    //     return initialPage;
    //   };

    const getPageToRender = () => {
      const initialPage = [];
      const pageRange = 1; // number of pages to show before/after the current page
    
      // render first page
      initialPage.push(
        <div
          key={1}
          className={page === 1 ? "actives" : undefined}
          onClick={() => setPage(1)}
        >
          <div className="single-pagination">{1}</div>
        </div>
      );
    
      // render ellipsis before current page
      if (page - pageRange > 2) {
        initialPage.push(
          <div key="ellipsis-before" className="ellipsis">
            <div className="single-pagination">...</div>
          </div>
        );
      }
    
      // render page numbers around current page
      for (let i = Math.max(2, page - pageRange); i <= Math.min(totalPage - 1, page + pageRange); i++) {
        initialPage.push(
          <div
            key={i}
            className={page === i ? "actives" : undefined}
            onClick={() => setPage(i)}
          >
            <div className="single-pagination">{i}</div>
          </div>
        );
      }
    
      // render ellipsis after current page
      if (page + pageRange < totalPage - 1) {
        initialPage.push(
          <div key="ellipsis-after" className="ellipsis">
            <div className="single-pagination">...</div>
          </div>
        );
      }
    
      // render last page
      if (totalPage > 1) {
        initialPage.push(
          <div
            key={totalPage}
            className={page === totalPage ? "actives" : undefined}
            onClick={() => setPage(totalPage)}
          >
            <div className="single-pagination">{totalPage}</div>
          </div>
        );
      }
    
      return initialPage;
    };
    
    
      

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
                booked
                .slice((page-1) * size, page * size)
                .map(book => <OrderHistoryTemplate book={book} key={book.Code
                } /> )
            }
           
           </div> 
           <div className='paginator-parent'>
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>Pre</button>
                {getPageToRender()}
                <button disabled={page === totalPage} onClick={() => setPage(page + 1)}>Next</button>
            </div>

           {isLoading && <Suspense />}
        </>
    );
};

export default OrderHistory;