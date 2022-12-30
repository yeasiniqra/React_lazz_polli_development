import React from 'react';
import { useParams } from 'react-router-dom';
import { getCottageSuitesSingle } from '../../services/data-service';
import PageHeader from '../PageHeader/PageHeader';
import commonBg from '../../images/room.jpg';
import SuitsAndRoomDetailsTem from './SuitsAndRoomDetailsTem';
import { useState } from 'react';
import RoomSuitsMdl from '../Sheared/CommonModal/RoomSuitsMdl';

const SuitsAndRoomDetails = () => {
    
    const [suitsAndRoom, setSuitsAndRoom] = useState(null)
    const {id} = useParams();
    // console.log(id);
    const SuitsAndRoomData = getCottageSuitesSingle(+id)
//    console.log(SuitsAndRoomData);
    return (
        <div>
           <PageHeader imageURL={commonBg} title={'Cottage & Room Details'} />
            <div className='room-search-area'>
                <div className='container'>
                    <div className='cottage-room-details-grid'>
                        {
                            SuitsAndRoomData?.CottageSuitsSingle?.map(cottage => <SuitsAndRoomDetailsTem
                                 cottage={cottage}
                                  key={cottage.id} 
                                  setSuitsAndRoom={setSuitsAndRoom}
                                 /> )
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