import React from 'react';
import Map from './Map';

const GoogleMapTemplate = () => {
    const title = {
        title : 'Our location',
        subTitle : 'Lazz Polli Resort located only 16 km away from Dhanmondi. A fantastic location near to Dhaka Aricha highway. Lazz Polli Resort consists of modern and alluring rooms & suites, swimming pool, pond, playground for family, couples and honeymooners with attractive facilities.'
    }
   
    return (
        <>
        <section id="local-area" className="location content-block map-block">
            <article>
                <div className="common-heading">
                    <h2>Lazz Polli Resort</h2>
                </div>
                <div className="">
                    <Map />
                </div>
                <div className="map-widget">
                    <h3>{title.title}</h3>
                    <div className="map-copy-wrapper">
                        <p>
                            {title.subTitle}
                        </p>
                    </div>
                    <h3>What's Nearby</h3>
                    <div className="attraction-wrapper">
                        <div className="attraction-trigger-wrapper" data-jq-dropdown="#jq-attraction-dropdown-1566853">
                            <a href='/#'>Local Attractions</a>
                        </div>
                    </div>
                    <div className="map-widget-filter-wrapper">
                        <ol className="map-widget-filter">
                            <li data-attcatid="0" className="all-attractions 11">
                                <span className="attraction-name">Jatiyo Sriti Shoudho (National Martyrs' Memorial).</span>
                            </li>
                            <li data-attcatid="0" className="all-attractions 6">
                                <span className="attraction-name">Jahangirnagar University.</span>    
                            </li>
                            <li data-attcatid="1" className="all-attractions 6">
                                <span className="attraction-name">Savar Golf Course.</span>
                            </li>
                            <li data-attcatid="2" className="all-attractions 6">
                                <span className="attraction-name">Sadullapur Flower Garden.</span>
                            </li>
                            <li data-attcatid="3" className="all-attractions 6">
                                <span className="attraction-name">National Martyr's Monument.</span>
                            </li>
                            <li data-attcatid="4" className="all-attractions 6">
                                <span className="attraction-name">Mohera Jomidar Bari.</span>
                            </li>
                        </ol>
                    </div>
                    <div className="clearfix"></div>
                </div>
               
            </article>
        </section>
        </>
    );
};

export default GoogleMapTemplate;