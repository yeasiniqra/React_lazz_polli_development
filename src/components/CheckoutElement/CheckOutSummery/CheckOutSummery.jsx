import React from 'react';
import { useContext } from 'react';
import cartContext from '../../../store/cart-context';
import CheckOutSummeryTemplate from './CheckOutSummeryTemplate';

const CheckOutSummery = () => {
    const {rooms} = useContext(cartContext)
    console.log(rooms);
    const title = {
        title : 'Your booking summary'
    }
    return (
        <div className="room-search-cart-right">
            <div className="shopping-cart">
                <h4>{title.title}</h4>
                {
                    rooms.map(room => <CheckOutSummeryTemplate key={room.Id} room={room} />)
                }
            </div>
        </div>
    );
};

export default CheckOutSummery;