import React from 'react';

const ReviewTemplate = ({reviews, handleDelete}) => {
    const {Text, Id} = reviews
    return (
        <>
            <div className='single-review'>
                <h2>{reviews.User.FirstName}</h2>
                <p>{Text}</p>
                <button onClick={() => handleDelete(Id)}>Delete</button>
            </div>
        </>
    );
};

export default ReviewTemplate;