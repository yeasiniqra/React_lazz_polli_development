import React from 'react';
import { useTitle } from '../hooks/UseTitle';

const ErrorPage = () => {
    useTitle('Page Not Found')
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