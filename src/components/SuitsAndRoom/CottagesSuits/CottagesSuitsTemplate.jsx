import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { GET_HOUSE } from "../../../lib/endpoints";
import { setHouses } from "../../../services/data-service";
import { getV2 } from "../../../services/http-service-v2";
import Suspense from "../../Sheared/Suspense/Suspense";

import CottagesSuits from "./CottagesSuits";

const CottagesSuitsTemplate = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [room, setRoom] = useState([]);
    const mounted = useRef(false);

    const getHouses = useCallback(() => {
        setIsLoading(true);
        getV2({ url: GET_HOUSE() }).then((data) => {
            if (!data.IsError) {
                setRoom(data.Data.Data);
                setHouses(data.Data.Data);
                setIsLoading(false);
            } else {
                //   console.log(data);
            }
        });
    }, []);

    useEffect(() => {
        if (!mounted.current) {
            getHouses();
            mounted.current = true;
        }
    }, [getHouses]);

    return (
        <div className="cottagesuits-area">
            <div className="container">
                <div className="cottagesuits-grid-parent">
                    {room.map((item) => (
                        <CottagesSuits key={item.Id} item={item} />
                    ))}
                </div>
            </div>
            {isLoading && <Suspense />}
        </div>
    );
};

export default CottagesSuitsTemplate;
