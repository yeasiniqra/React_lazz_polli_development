import React from 'react';
import { useParams } from 'react-router-dom';
import { getCottageSuitesSingle2 } from '../../services/data-service';
import PageHeader from '../PageHeader/PageHeader';
import SuitsAndCottageDetailsTem from './SuitsAndCottageDetailsTem';
import commonBg from '../../images/room.jpg';

const SuitsAndCottageDetails = () => {
    const {roomId} = useParams();
    const {Id} = useParams();

    const SuitsAndRoomDatas = getCottageSuitesSingle2(+Id, +roomId)
    // console.log(SuitsAndRoomDatas)


    return (
        <div>
           <PageHeader imageURL={commonBg} title={'Room Details'} />
            <div className='room-search-area'>
                <div className='container'>
                    <div className='details-room-main-grid'>
                        <SuitsAndCottageDetailsTem room={SuitsAndRoomDatas}/>
                    </div> 
                </div>
            </div>   
          {/* {
             SuitsAndRoomDatas?.roomSingle.map(item => <SuitsAndCottageDetailsTem key={item.Id} item={item} />)
          } */}
        </div>
    );
};

export default SuitsAndCottageDetails;