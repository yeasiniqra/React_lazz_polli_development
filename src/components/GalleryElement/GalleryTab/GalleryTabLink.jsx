import React, { useCallback, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { GALLERY_MENU_TAB_BUTTON_NAMES } from "../../../constants/magic-string";
import { getV2 } from "../../../services/http-service-v2";
import { GET_GALLERY } from "../../../lib/endpoints";
import DubleDom from "./DubleDom";
import MudHouse from "./MudHouse";
import RaniyaHouse from "./RaniyaHouse";
import Suspense from "../../Sheared/Suspense/Suspense";
import IchamotiHouse from "./IchamotiHouse";

const GalleryTabLink = () => {
    const [galleryImage, setGalleryImage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const mounted = useRef(false)

    const [actionTab, setActionTab] = useState(
        GALLERY_MENU_TAB_BUTTON_NAMES.SPACES
      );

    const tabChangeHandler = (tabName) => {
        setActionTab(tabName);
    };

    const getGalleryImages = useCallback(() => {
        setIsLoading(true)
        getV2({url: GET_GALLERY(40,1)})
        .then(data => {
          if(!data.IsError){
            setGalleryImage(data.Data);
            setIsLoading(false)
          } else {
           alert('Error')
          }
          
        }).catch(error => {
         
        });
      }, []);
    
      useEffect(() => {
        if (!mounted.current) {
            getGalleryImages();
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
                 </nav>

                <div className="niiceeTabContent">
                  {
                    actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.SPACES && galleryImage && 
                     <RaniyaHouse galleryImage={galleryImage} isLoading={isLoading} />
                  }
                  {actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.ACTIVITIES && galleryImage &&
                     <DubleDom galleryImage={galleryImage} isLoading={isLoading} />
                  }

                  {actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.POOLS && galleryImage && 
                    <MudHouse galleryImage={galleryImage} isLoading={isLoading} />
                  }
                  {actionTab === GALLERY_MENU_TAB_BUTTON_NAMES.RESTAURANTS && galleryImage && 
                    <IchamotiHouse galleryImage={galleryImage} isLoading={isLoading} />
                  }
                </div>
                {isLoading && <Suspense />}
            </div>    
        </>
    );
};

export default GalleryTabLink;

