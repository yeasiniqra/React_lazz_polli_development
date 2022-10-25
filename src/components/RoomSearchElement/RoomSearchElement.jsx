import React from 'react';
import { getroomSearchCard } from '../../services/data-service';
import BookingSummary from './BookingSummary/BookingSummary';
import FilterPrice from './FilterPrice/FilterPrice';
import SearchRoomFilter from './RoomSearchFilter/SearchRoomFilter';
import SearchCard from './SearchCard/SearchCard';


const RoomSearchElement = () => {
    const searchService = getroomSearchCard();
    return (
        <>
          <SearchRoomFilter />
          <section className="room-search-area">
            <div className="container">
                <div className="room-search-cart-main">
                    <div className="room-search-cart-left">
                        <div className="room-search-inner-content">
                            <FilterPrice />
                            <div className="search-room-main-items-grid">
                                {
                                   searchService.map( (item, index) =>
                                   <SearchCard item={item} key={index} />
                                   ) 
                                }
                            </div>
                         </div>
                    </div>
                    <BookingSummary />
                </div>
            </div>
         </section>
        </>
    );
};

export default RoomSearchElement;