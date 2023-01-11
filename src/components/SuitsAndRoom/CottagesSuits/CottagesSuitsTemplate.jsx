import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GET_HOUSE } from "../../../lib/endpoints";
import { getCottageSuites, setHouses } from "../../../services/data-service";
import { getV2 } from "../../../services/http-service-v2";

import CottagesSuits from "./CottagesSuits";

const CottagesSuitsTemplate = () => {
  //const cottages = getCottageSuites();

  const [room, setRoom] = useState([]);
  
  const getHouses = useCallback(() => {
    getV2({ url: GET_HOUSE() }).then((data) => {
      if (!data.IsError) {
        // console.log(data)

        setRoom(data.Data.Data);
        setHouses(data.Data.Data);
        console.log(room);
      } else {
        //   console.log(data);
      }
    });
  }, []);

  useEffect(() => {
    getHouses();
  }, []);

  return (
    <div className="cottagesuits-area">
      <div className="container">
        <div className="cottagesuits-grid-parent">
          {room.map((item) => (
            <CottagesSuits key={item.Id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CottagesSuitsTemplate;
