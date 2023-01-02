import React from "react";
import { getCottageSuites } from "../../../services/data-service";


import CottagesSuits from "./CottagesSuits";

const CottagesSuitsTemplate = () => {
    const cottages = getCottageSuites();
    
  return (
    <div className="cottagesuits-area">
      <div className="container">
        <div className="cottagesuits-grid-parent">
          {
            cottages.map(item => <CottagesSuits key={item.Id} item={item} />)
          }
        </div>
      </div>
    </div>
  );
};

export default CottagesSuitsTemplate;
