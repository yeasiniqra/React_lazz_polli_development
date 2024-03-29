import PageHeader from '../PageHeader/PageHeader';
import RoomDetailsTemplate from './RoomDetailsTemplate/RoomDetailsTemplate';
import commonBg from '../../images/room.webp';
import { useParams } from 'react-router-dom';
import { getRoom } from '../../services/data-service';

const RoomDetails = () => {
    const {Id} = useParams();
    const roomData = getRoom(+Id);
    console.log(roomData);
    return (
        <>
            <PageHeader imageURL={commonBg} title={'Room Details'} />
            <div className='room-search-area'>
                <div className='container'>
                    <div className='details-room-main-grid'>
                        <RoomDetailsTemplate room={roomData}/>
                    </div> 
                </div>
            </div>            
        </>
    );
};

export default RoomDetails;