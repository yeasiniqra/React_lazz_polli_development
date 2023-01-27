import React from 'react';
import { humanizeDate } from '../../../lib/utils';

const InvoiceTeamplate = ({item, index}) => {
    const {ReservationDate,ReleaseDate,Quantity,Price,Type, Name} = item
    return (
        <>
                <tr className="tr-border">
                    <td>{index + 1}</td>
                    <td>{Type === 'ROOM' ? Name : Name }</td>
                    <td>{humanizeDate(ReservationDate)}</td>
                    <td>{humanizeDate(ReleaseDate)}</td>
                    <td>{Quantity}</td>
                    <td>{Quantity * Price}</td>
                </tr>
        </>
    );
};

export default InvoiceTeamplate;