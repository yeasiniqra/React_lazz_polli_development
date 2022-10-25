import React, { useState } from 'react';
import { CHECKOUT_MENU_TAB_BUTTON_NAMES } from '../../../constants/magic-string';

import ExistingCustomarInfo from './InformationCard/ExistingCustomarInfo';
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
                New Customer
            </button>
            <button
                className={`tablinks ${
                actionTab === CHECKOUT_MENU_TAB_BUTTON_NAMES.EXISTING_CUSTOMER && "active"
                }`}
                onClick={tabChangeHandler.bind(
                null,
                CHECKOUT_MENU_TAB_BUTTON_NAMES.EXISTING_CUSTOMER
                )}
                >
                Existing Customer
            </button>
            </nav>

            <div className="niiceeTabContent">
                {actionTab === CHECKOUT_MENU_TAB_BUTTON_NAMES.NEW_CUSTOMER && <NewCustomarInfo />}
                {actionTab === CHECKOUT_MENU_TAB_BUTTON_NAMES.EXISTING_CUSTOMER && <ExistingCustomarInfo />}
            </div>
       </div> 
    );
};

export default CheckoutTabLinks;