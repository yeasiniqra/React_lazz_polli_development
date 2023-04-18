import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../images/logo-black.png";
import { GET_INVOICE } from "../../../lib/endpoints";
import { humanizeDate } from "../../../lib/utils";
import { getV2 } from "../../../services/http-service-v2";
import { printInvoice } from "../../../services/invoice-service";
import Suspense from "../../Sheared/Suspense/Suspense";
import InvoiceTeamplate from "./InvoiceTeamplate";

const Invoice = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [invoice, setInvoice] = useState([]);
  const {Code} = useParams();
  const mounted = useRef(false);
  const { PayableAmount} = invoice;
  const [typeChek, setTypecheck] = useState(null);

  console.log("inside order his", typeChek)

  const handleGetInvoice = () => {
      setIsLoading(true)
      getV2({ url: GET_INVOICE(Code) }).then((data) => {
          if (!data.IsError) {
            setInvoice(data.Data)
          } else {
            toast.warning(`${data.Msg}`);
          }
        }).catch(err => {
          toast.warning(err?.toString());
        }).finally(() => {
          setIsLoading(false)
        });
    }

    useEffect(() => {
      if (!mounted.current) {
        handleGetInvoice();
          mounted.current = true;
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Code,mounted]);

  // const newTax = invoice.Amount * 0.15;
  const dueCount = invoice.PayableAmount - invoice.Paid
  
  const print = () => {
    printInvoice(invoice)
  };

  return (
    <div id="page" className="order-invoice">
      <div className="order-invoice-ea">
        <div className="page">
          <div className="custom-row-top invoice-container">
            <div className="span4">
              <img src={logo} alt="lazz polli resort no-print" className="no-print" />
              <img src={logo} alt="resort lazz polli print" className="print" />
              <address>
                <h2>Lazz Polli Resort</h2>
                Hemayetpur Saver, Dhaka
                <br />
              </address>
            </div>
            <div className="span4 well">
              <table className="invoice-head">
                <tbody>
                  <tr>
                    <td>{invoice && invoice.FirstName}</td>
                  </tr>
                  <tr>
                    <td>OrderID # {invoice.Code}</td>
                  </tr>
                  <tr>
                    <td>{humanizeDate(invoice.CreatedAt)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="invoice">
            <h2>Invoice</h2>
            <button className="hide-on-print" onClick={print}>Print Invoice</button>
          </div>
          <div className="custom-table-row">
            <div className="span12 well invoice-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#sl</th>
                    <th>Room / House</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    {/* <th>Due</th>
                    <th>Paid</th> */}
                  </tr>
                </thead>
                <tbody>
                {
                invoice.BookedPlaces && 
                invoice.BookedPlaces.map((item,index) => <InvoiceTeamplate
                 item={item}
                 key={index} 
                 index={index}
                 PayableAmount={PayableAmount}
                 setTypecheck={setTypecheck}
                 />)
                }
               </tbody>
              </table>
            </div>
            <div className="sum-table-for-invoice">
              <table className="table table-bordered small-table-sum">
                <tbody>
                  {
                    invoice.Amount ? 
                    <>
                      <tr>
                        <td>SubTotal</td>
                        <td className="SubTotal-tab">
                          <span>{invoice.Amount}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Incl.Tax</td>
                        <td className="SubTotal-tab">
                          <span>{invoice.Tax}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Due</td>
                        <td className="SubTotal-tab">
                          <span>{dueCount}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Paid Amount</td>
                        <td className="SubTotal-tab">
                          <span>{invoice.Paid}</span>
                        </td>
                      </tr>
                    </>
                    :
                    <></>
                  }
                  <tr className="grand-total">
                    <td>
                      <strong>Grand Total</strong>
                    </td>
                    <td className="SubTotal-tab">
                      <strong>&#2547; {typeChek === "POOL" ? (invoice.PayableAmount * invoice.Quantity) : invoice.PayableAmount}</strong>
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
      {isLoading && <Suspense />}
    </div>
  );
};

export default Invoice;
