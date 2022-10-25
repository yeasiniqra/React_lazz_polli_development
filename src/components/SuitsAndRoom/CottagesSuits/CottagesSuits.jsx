import React from "react";
import { Link } from "react-router-dom";


const CottagesSuits = ({item}) => {

  return (   
          <div className="cottagesuits-grid">
            <div className="cottagesuits-single">
              <div className="cottagesuits-img">
                <img src={item.image} alt="images" />
                <div className="book-overly">
                  <div className="common-btn">
                    <Link to="/room">View Cottages</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="cottagesuits-content">
              <div className="overly-content">
                <div className="hover-ef-1"></div>
                <div className="overly-content-inner">
                  <h2>{item.title}</h2>
                  <p>
                    {item.desc}
                  </p>
                  <div className='SuitSpecials'>
                   <h3>{item.cottagesTitle}</h3>
                   <div className='SuitSpecials-item'>
                   {
                    item.cottagesSpecials.map((product, index)  => 
                    <div key={index} className='getway-single-item suitSpecials-single-item'>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                        <h4>{product.title}</h4>
                    </div> 
                    )
                   }
                   </div>
                </div>
                  <div className="common-btn">
                    <Link to="/room">{item.btnText}</Link>
                  </div>
                </div>
                <div className="hover-ef-2"></div>
              </div>
            </div>
          </div>
      
  );
};

export default CottagesSuits;
