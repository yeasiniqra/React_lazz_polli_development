import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCottageSuitesSingle, getHouse } from '../../services/data-service';
import PageHeader from '../PageHeader/PageHeader';
import commonBg from '../../images/room.webp';
import SuitsAndRoomDetailsTem from './SuitsAndRoomDetailsTem';
import { useState } from 'react';
import RoomSuitsMdl from '../Sheared/CommonModal/RoomSuitsMdl';
import { GET_SINGLE_HOUSES } from '../../lib/endpoints';
import { getV2 } from '../../services/http-service-v2';

const SuitsAndRoomDetails = () => {
    const {Id} = useParams();
    // const SuitsAndRoomData = getHouse(Id);
    // console.log(SuitsAndRoomData);

    const [suitsAndRoom, setSuitsAndRoom] = useState(null)

    const [roomSingle, setRoomSingle] = useState([]);
  
    const getHousess = useCallback(() => {
      getV2({ url: GET_SINGLE_HOUSES(Id) }).then((data) => {
        if (!data.IsError) {
            if (data.Data === null) {
                alert('')
            }
            setRoomSingle(data.Data);
        } else {
          //   console.log(data);
        }
      });
    }, []);
  
    useEffect(() => {
      getHousess();
    }, []);
   
    // console.log(roomSingle)

    return (
        <div>
           <PageHeader imageURL={commonBg} title={'Cottage & Room Details'} />
            <div className='room-search-area'>
                <div className='container'>
                    <div className='cottage-room-details-grid'>
                        {
                            roomSingle &&
                            <SuitsAndRoomDetailsTem SuitsAndRoomData={roomSingle} setSuitsAndRoom={setSuitsAndRoom} />
                        }
                          

                        {
                            suitsAndRoom && 
                            <RoomSuitsMdl
                            suitsAndRoom={suitsAndRoom}
                            setSuitsAndRoom={setSuitsAndRoom}
                            />
                        }
                       
                    </div> 
                </div>
            </div>  
        </div>
    );
};

export default SuitsAndRoomDetails;