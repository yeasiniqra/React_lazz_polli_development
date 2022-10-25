import React, { useState } from "react";
import { DINE_MENU_TAB_BUTTON_NAMES } from "../../../constants/magic-string";
import BrackFast from "./BrackFast";
import Dinner from "./Dinner";
import Lunch from "./Lunch";

const DineTab = () => {
  const [actionTab, setActionTab] = useState(
    DINE_MENU_TAB_BUTTON_NAMES.BREAK_FAST
  );

  const tabChangeHandler = (tabName) => {
    setActionTab(tabName);
  };

  return (
    <>
      <div id="niiceeTab">
        <nav className="niiceeTabBtn">
          <button
            id="defaultOpen"
            className={`tablinks ${
              actionTab === DINE_MENU_TAB_BUTTON_NAMES.BREAK_FAST && "active"
            }`}
            onClick={tabChangeHandler.bind(
              null,
              DINE_MENU_TAB_BUTTON_NAMES.BREAK_FAST
            )}
          >
            Break Fast
          </button>
          <button
            className={`tablinks ${
              actionTab === DINE_MENU_TAB_BUTTON_NAMES.LUNCH && "active"
            }`}
            onClick={tabChangeHandler.bind(
              null,
              DINE_MENU_TAB_BUTTON_NAMES.LUNCH
            )}
          >
            Lunch
          </button>
          <button
            className={`tablinks ${
              actionTab === DINE_MENU_TAB_BUTTON_NAMES.DINNER && "active"
            }`}
            onClick={tabChangeHandler.bind(
              null,
              DINE_MENU_TAB_BUTTON_NAMES.DINNER
            )}
          >
            Dinner
          </button>
        </nav>

        <div className="tabbed niiceeTabContent">
          {actionTab === DINE_MENU_TAB_BUTTON_NAMES.BREAK_FAST && <BrackFast />}
          {actionTab === DINE_MENU_TAB_BUTTON_NAMES.LUNCH && <Lunch />}
          {actionTab === DINE_MENU_TAB_BUTTON_NAMES.DINNER && <Dinner />}
        </div>
      </div>
    </>
  );
};

export default DineTab;
