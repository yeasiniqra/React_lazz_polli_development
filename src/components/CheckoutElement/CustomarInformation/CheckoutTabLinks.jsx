import React, { useState } from 'react';
import { CHECKOUT_MENU_TAB_BUTTON_NAMES } from '../../../constants/magic-string';

import NewCustomarInfo from './InformationCard/NewCustomarInfo';

const CheckoutTabLinks = () => {
    const [actionTab, setActionTab] = useState(
        CHECKOUT_MENU_TAB_BUTTON_NAMES.NEW_CUSTOMER
      );

    const tabChangeHandler = (tabName) => {
    setActionTab(tabName);
    };
    return (
        <div id="niiceeTab">
            <nav className="niiceeTabBtn">
                <button
                    id="defaultOpen"
                    className={`tablinks ${
                    actionTab === CHECKOUT_MENU_TAB_BUTTON_NAMES.NEW_CUSTOMER && "active"
                    }`}
                    onClick={tabChangeHandler.bind(
                    null,
                    CHECKOUT_MENU_TAB_BUTTON_NAMES.NEW_CUSTOMER
                    )}
                    >
                    Guest Information
                </button>
            </nav>
            <div className="niiceeTabContent">
                {actionTab === CHECKOUT_MENU_TAB_BUTTON_NAMES.NEW_CUSTOMER && <NewCustomarInfo />}
            </div>
       </div> 
    );
};

export default CheckoutTabLinks;