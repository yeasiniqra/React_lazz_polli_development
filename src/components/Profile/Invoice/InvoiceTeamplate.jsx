import React from 'react';

const InvoiceTeamplate = ({item, index}) => {
    const {ReservationDate,ReleaseDate,Quantity,Price} = item
    return (
        <>
                <tr className="tr-border">
                    <td>{index + 1}</td>
                    {/* <td>Super King</td> */}
                    <td>{ReservationDate}</td>
                    <td>{ReleaseDate}</td>
                    <td>{Quantity}</td>
                    <td>{Price}</td>
                </tr>
        </>
    );
};

export default InvoiceTeamplate;