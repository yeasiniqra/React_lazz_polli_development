import React from 'react';


const GoogleMapTemplate = () => {
    const title = {
        title : 'Our location',
        subTitle : 'Lazz Polli Resort located only 31 miles away from Dhaka. A discrete location surrounded by forest is one of its unique delight. Lazz Polli Resort consists of 62 individual villas for family, couples and honeymooners with attractive facilities'
    }
   
    return (
        <>
        <section id="local-area" className="location content-block map-block">
            <article>
                <div className="common-heading">
                    <h2>Lazz Polli Resort</h2>
                </div>
               
                <div className="">
                    <iframe title='Gooogle Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3835401431706!2d90.2598539!3d23.8049568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755eb01964f0f8b%3A0x61de440329a821fc!2sLazz%20Polli%20Convention!5e0!3m2!1sen!2sbd!4v1658041586709!5m2!1sen!2sbd"  allowFullScreen=""
                        width="100%"
                        height="600"
                        frameBorder="0"></iframe>
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