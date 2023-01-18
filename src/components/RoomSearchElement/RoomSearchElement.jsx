import React, { useState } from 'react';
import { getroomSearchCard } from '../../services/data-service';
import BookingSummary from './BookingSummary/BookingSummary';
import FilterPrice from './FilterPrice/FilterPrice';
import SearchRoomFilter from './RoomSearchFilter/SearchRoomFilter';
import SearchCard from './SearchCard/SearchCard';

const RoomSearchElement = () => {
    const searchService = getroomSearchCard();
    const [availble, setIsAvailble] = useState(null)
    console.log(availble)
    return (
        <>
          <SearchRoomFilter setIsAvailble={setIsAvailble} />
          <section className="room-search-area">
            <div className="container">
                <div className="room-search-cart-main">
                    <div className="room-search-cart-left">
                        <div className="room-search-inner-content">
                            <FilterPrice />
                            {
                                availble && 
                                <div className="search-room-main-items-grid">
                                {
                                   availble.map( (item, index) =>
                                   <SearchCard 
                                   item={item} 
                                   key={index} 
                                   
                                   />
                                   ) 
                                }
                            </div>
                            }
                           
                         </div>
                    </div>
                    <div className="room-search-cart-right">
                         <div className="shopping-cart">
                            <h4>Booking Summary</h4>
                            <BookingSummary />
                        </div>
                    </div>        
                </div>
            </div>
         </section>
        </>
    );
};

export default RoomSearchElement;