import React from 'react';
import CountUp, { useCountUp } from "react-countup";

const SupportTemplate = () => {
    useCountUp({
        ref: "counter",
        end: 2000,
        enableScrollSpy: true,
        scrollSpyDelay: 1000
      });
    return (
        <>
        <section className="support-given-area" id="scrollanime">
            <div className="container">
                <div className="support-given-main-flex pt-20">
                
                    <div className="support-given-single-item">
                        <div className="support-gif-icon">
                            <h6 id="count1" className="display_4"><span id="counter" /></h6>
                        </div>
                        <span>Customers</span>
                    </div>
                
                    <div className="support-given-single-item">
                        <div className="support-gif-icon">
                            <h6 id="count2" className="display_4"><CountUp end={4000} enableScrollSpy /></h6>
                        </div>
                        <span>Celebrities</span>
                    </div>
                   
                    <div className="support-given-single-item">
                        <div className="support-gif-icon">
                            <h6 id="count3" className="display_4"><CountUp end={3000} enableScrollSpy /></h6>
                        </div>
                        <span>Returns</span>
                    </div>
                    
                    <div className="support-given-single-item">
                        <div className="support-gif-icon">
                            <h6 id="count4" className="display_4"><CountUp end={7000} enableScrollSpy /></h6>
                        </div>
                        <span>Happy people</span>
                    </div>
                </div>
            </div>
        </section>   
        </>
    );
};

export default SupportTemplate;