import React from 'react';

const ErrorPage = () => {
    return (
        <>
         <div className='page-not-found-area'>
            <div className='container'>
                <div className="page-not-found">
                   <i className="fa fa-meh-o" aria-hidden="true"></i>
                   <h1> Page Not Found!!! </h1>
                </div>
            </div>
         </div>   
        </> 
    );
};

export default ErrorPage;