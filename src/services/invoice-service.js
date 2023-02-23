import { humanizeDate } from "../lib/utils";

export const printInvoice = (data) => {
    const printWindow = window.open('', 'PRINT', 'height=800,width=1250');
    const HTML = generateHTML(data);
    printWindow.document.write(`
    <html>
      <head>
        <style>
          @media print {
            @page {
              size: A4;  
              margin: 0; 
            }
          }
        </style>
      </head>
      <body onload="window.print();">
        ${HTML}
      </body>
    </html>
  `);
    printWindow.document.close(); // necessary for IE >= 10
    printWindow.focus();
}


 
const generateHTML = (data) => {
    const newTax = data.Amount * 0.15;
    const PayableAmount = data.PayableAmount
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Purchase Invoice</title>
      </head>
      <style>
        /* REPORT PAGE STYLES */
        body {
          background: rgb(204, 204, 204);
          text-transform: capitalize;
          box-sizing: border-box;
        }
        page {
          background: white;
          display: block;
          margin: 0 auto;
          margin-bottom: 0.5cm;
          /* box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5); */
        }
        page[size="A4"] {
          height: 303mm;
          width: 216mm;
        }
        @media print {
          body,
          page {
            margin: 0;
            box-shadow: 0;
          }
        }
        /* INVOICE STYLES */
        html {
          font-size: 14px;
        }
        .invoice * {
          margin: 0;
          font-family: "Times New Roman", Times, serif;
        }
        .sheet {
          padding: 0.5in;
        }
        .invoice strong {
          font-weight: 500;
        }
        .invoice h1 {
          font-size: 1.75rem;
          text-decoration: underline;
          text-align: center;
          margin: 1rem 0 2rem 0;
        }
        .invoice__top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        tbody.table-grid tr td {
          font-weight: 700;
          font-family: tahoma;
      }
        .table-grid > tr {
          display: grid;
          // grid-template-columns: 92px 1fr;
          place-items: inherit;
        }
        .invoice__top img {
          width: 80px;
        }
        .invoice__top h2 {
          font-size: 1.6rem;
        }
        .general-info {
          padding: 0.25rem;
          border-radius: 0.25rem;
        }
        .invoice__address h2 {
            font-weight: 800;
            font-family: tahoma;
            display: block;
            margin-bottom: 5px;
        }
        .invoice__address address {
            font-family: tahoma;
            font-weight: 400;
        }
        table#products thead tr th {
          font-weight: 700 !important;
          font-family: tahoma !important;
      }
      table.table.table-bordered.small-table-sum tbody tr td {
        font-family: tahoma;
        font-weight: 400;
    }
    table.table.table-bordered.small-table-sum tbody tr td strong {
      font-weight: 700;
      font-family: tahoma;
  }
      table#products tbody tr td {
        font-family: tahoma;
        font-weight: 400;
    }

        .invoice__top table {
          width: 100%;
        }
        .invoice__top td:nth-child(2n + 1) {
          padding-right: 0.5rem;
          padding-bottom: 0.25rem;
          text-align: right;
        }
        .invoice__top td:nth-child(2n) {
          padding-left: 0.5rem;
          text-align: left;
        }
        .invoice-mid {
          min-width: 100%;
          max-width: 100%;
          background: #f5f5f5;
          padding-left: 0.25rem;
          margin-bottom: 2rem;
        }
        .invoice-mid table {
          min-width: 100%;
          max-width: 100%;
          width: 100%;
        }
        .invoice-mid table,
        .invoice-mid td,
        .invoice-mid th {
          border: 1px solid rgba(0, 0, 0, 0.26);
          border-collapse: collapse;
        }
        .invoice-mid table tr th {
          /* text-align: center; */
          font-weight: 500;
          padding: 0.25rem 0.5rem;
        }
        .invoice-mid table tr td {
          padding: 0.25rem 0.5rem;
        }
        .invoice__bottom {
          margin-bottom: 2rem;
          display: flex;
          justify-content: end;
        }
        .invoice__bottom table td,
        .invoice__bottom table {
          border-collapse: collapse;
          border: 1px solid rgba(0, 0, 0, 0.25);
          text-align: left;
        }
        .invoice__bottom table td {
          padding: 0.25rem 2rem;
        }
        .cross {
          text-decoration: line-through;
          font-size: 12px;
        }
        .right {
          text-align: right;
        }
        .no-wrap {
          white-space: nowrap;
        }
        .center {
          text-align: center;
        }
      </style>
      <body>
        <page size="A4" class="sheet invoice">
          <h1>Purchase Invoice</h1>
          <div class="invoice__top">
            <div>
              <img src="/logo-black.png" alt="logo" class="lazz polli invoice logo" />
              <div class="invoice__address">
                <h2>Lazz Polloi Resort</h2>
                <address>
                    Lazz Polli Convention, Hemayetpur Saver
                </address>
              </div>
            </div>
            <div class="general-info">
              <table>
                <tbody class="table-grid">
                  <tr>
                    <td id="username">${data.FirstName}</td>
                  </tr>
                  <tr>
                    <td id="order-no">OrderID # ${data.Code}</td>
                  </tr>
                  <tr>
                    <td id="order-today">${humanizeDate(data.CreatedAt)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="invoice-mid">
            <table id="products">
              <thead>
                <tr>
                  <th class="center">sl</th>
                  <th style="text-align: left">Room / House</th>
                  <th class="right">Check In</th>
                  <th class="center">Check Out</th>
                  <th class="right">Pax Details</th>
                  <th class="right">Amount(Tk)</th>
                </tr>
              </thead>
              <tbody>
              ${data.BookedPlaces.map((items, i) => 
                ` <tr>
                     <td class="center">${i + 1}</td>
                     <td>${items.Name}</td>
                     <td class="right">${humanizeDate(items.ReservationDate)}</td>
                     <td class="center">${humanizeDate(items.ReleaseDate)}</td>
                     <td class="right">${items.Quantity}</td>
                     <td class="right">${items.Type === "HALL" ? PayableAmount : items.Quantity * items.Price}</td>
                 </tr>`
               ).join('')}
              </tbody>
            </table>
          </div>
          
          <div class="invoice__bottom">
            <table class="table table-bordered small-table-sum">
              <tbody>
                <tr>
                  <td>SubTotal</td>
                  <td id="sub-total">${data.Amount}</td>
                </tr>
                <tr>
                  <td>Incl.Tax</td>
                  <td id="coupon-discount">${newTax}</td>
                </tr>
                
                <tr>
                  <td>
                    <strong>Grand Total</strong>
                  </td>
                  <td>
                    <strong id="order-value">৳ ${data.PayableAmount}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </page>
      </body>
    </html>
    `
}

