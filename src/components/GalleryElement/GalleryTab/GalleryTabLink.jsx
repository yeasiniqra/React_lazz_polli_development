import React, { useCallback, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { GALLERY_MENU_TAB_BUTTON_NAMES } from "../../../constants/magic-string";
import { GALLERY_PAGE, GET_GALLERY, IMAGE_CATEGORY, PAGE_SIZE } from "../../../lib/galleryService";
import { getV2 } from "../../../services/http-service-v2";
// import { GET_GALLERY } from "../../../lib/endpoints";
import Activities from "./Activities";
import Pools from "./Pools";
import Restaurants from "./Restaurants";
import Reviews from "./Reviews";
import Spaa from "./Spaa";
import Space from "./Space";

const GalleryTabLink = () => {
    const [roomreview, setRoomreview] = useState([])
    const mounted = useRef(false)
    console.log(roomreview);

    const [actionTab, setActionTab] = useState(
        GALLERY_MENU_TAB_BUTTON_NAMES.SPACES
      );

    const tabChangeHandler = (tabName) => {
        setActionTab(tabName);
    };

    const getRoomReview = useCallback(() => {
        getV2({url: GET_GALLERY(IMAGE_CATEGORY.SPACES, PAGE_SIZE.PAGE_ONE, GALLERY_PAGE.ONE)})
        .then(data => {
            console.log('inside gallery', data)
          if(!data.IsError){
            setRoomreview(data.Data.data);
          } else {
           alert('Error')
          }
          
        }).catch(error => {
         
        });
      }, []);
    
      useEffect(() => {
        if (!mounted.current) {
          getRoomReview();
          mounted.current = true;
      }
    }, [mounted]);

      
    return (
        <>
            <div id="niiceeTab">
                 <nav className="niiceeTabBtn">
                    <button
                        id="defaultOpen"
                        className={`tablinks ${
                        actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.SPACES && "active"
                        }`}
                        onClick={tabChangeHandler.bind(
                        null,
                        GALLERY_MENU_TAB_BUTTON_NAMES.SPACES
                        )}
                    >
                    Rania House
                    </button>
                    <button
                        className={`tablinks ${
                        actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.ACTIVITIES && "active"
                        }`}
                        onClick={tabChangeHandler.bind(
                        null,
                        GALLERY_MENU_TAB_BUTTON_NAMES.ACTIVITIES
                        )}
                    >
                    Double Dom
                    </button>
                    <button
                        className={`tablinks ${
                        actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.POOLS && "active"
                        }`}
                        onClick={tabChangeHandler.bind(
                        null,
                        GALLERY_MENU_TAB_BUTTON_NAMES.POOLS
                        )}
                    >
                        Mud House
                    </button>
                    <button
                        className={`tablinks ${
                        actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.RESTAURANTS && "active"
                        }`}
                        onClick={tabChangeHandler.bind(
                        null,
                        GALLERY_MENU_TAB_BUTTON_NAMES.RESTAURANTS
                        )}
                    >
                    Ichamoti House
                    </button>
                    {/* <button
                        className={`tablinks ${
                        actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.SPA && "active"
                        }`}
                        onClick={tabChangeHandler.bind(
                        null,
                        GALLERY_MENU_TAB_BUTTON_NAMES.SPA
                        )}
                    >
                    spaa
                    </button>
                    <button
                        className={`tablinks ${
                        actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.REVIEWS && "active"
                        }`}
                        onClick={tabChangeHandler.bind(
                        null,
                        GALLERY_MENU_TAB_BUTTON_NAMES.REVIEWS
                        )}
                    >
                    Reviews
                    </button> */}

                 </nav>

                <div className="niiceeTabContent">
                  {actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.SPACES && <Space />}
                  {actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.ACTIVITIES && <Activities />}
                  {actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.POOLS && <Pools />}
                  {actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.RESTAURANTS && <Restaurants />}
                  {/* {actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.SPA && <Spaa />}
                  {actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.REVIEWS && <Reviews />} */}
                </div>
            </div>    
        </>
    );
};

export default GalleryTabLink;