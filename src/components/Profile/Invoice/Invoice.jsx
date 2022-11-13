import React from "react";
import logo from "../../../images/logo-black.png";

const Invoice = () => {
  const print = () => {
    window.open("/invoice.html", "_blank");
  };
  return (
    <div id="page" className="order-invoice">
      <div className="order-invoice-ea">
        <div className="page">
          <div className="custom-row-top">
            <div className="span4">
              <img src={logo} alt="img" className="no-print" />
              <img src={logo} alt="img" className="print" />
              <address>
                <h2>Lazz Polli Convention</h2>
                Hemayetpur Saver, Dhaka
                <br />
              </address>
            </div>
            <div className="span4 well">
              <table className="invoice-head">
                <tbody>
                  <tr>
                    {/* <td className="pull-right">
                        <strong>Order ID</strong>
                      </td> */}
                    <td>OrderID #0144327586</td>
                  </tr>
                  <tr>
                    {/* <td className="pull-right">
                        <strong>Name</strong>
                      </td> */}
                    <td>max well</td>
                  </tr>

                  <tr>
                    {/* <td className="pull-right">
                        <strong>Invoice Date</strong>
                      </td> */}
                    <td>07-11-2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="invoice">
            <h2>Invoice</h2>
            <button onClick={print}>Print</button>
          </div>
          <div className="custom-table-row">
            <div className="span12 well invoice-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#sl</th>
                    <th>Room Type</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Pax Details</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tr-border">
                    <td>01</td>
                    <td>Super King</td>
                    <td>07-11-2022</td>
                    <td>07-11-2022</td>
                    <td>1 Adults 1 Child</td>
                    <td>58798</td>
                  </tr>
                  <tr className="tr-border">
                    <td>02</td>
                    <td>Super King 2</td>
                    <td>07-11-2022</td>
                    <td>07-11-2022</td>
                    <td>1 Adults 1 Child</td>
                    <td>58798</td>
                  </tr>
                  <tr className="tr-border">
                    <td>03</td>
                    <td>Super King 3</td>
                    <td>07-11-2022</td>
                    <td>07-11-2022</td>
                    <td>1 Adults 1 Child</td>
                    <td>58798</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sum-table-for-invoice">
              <table className="table table-bordered small-table-sum">
                <tbody>
                  <tr>
                    <td>SubTotal</td>
                    <td className="SubTotal-tab">
                      <span>435435435</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Paid Amount</td>
                    <td className="SubTotal-tab">
                      <span>3452345</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Unpaid Amount</td>
                    <td className="SubTotal-tab">
                      <span>1312342</span>
                    </td>
                  </tr>
                  <tr className="grand-total">
                    <td>
                      <strong>Grand Total (Incl.Tax)</strong>
                    </td>
                    <td className="SubTotal-tab">
                      <strong>&#2547; 1233334</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="footer-row">
            <div className="cask-rewarded">
              <span>
                Have a nice day
                <i className="fa fa-smile-o" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
