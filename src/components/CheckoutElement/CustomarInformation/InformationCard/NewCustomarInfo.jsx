import React, { useCallback } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { countries } from "../../../../data/countries";
import AutoComplete from "../../../Sheared/AutoComplete/AutoComplete";
import Input from "../../../Sheared/Input/Input";
import Textarea from "../../../Sheared/Textarea/Textarea";
import DatePicker from 'react-datepicker';
import { 
  GET_USER_PROFILE,
  POST_ROOM_BOOKING,
  POST_UPDATE_PROFILE,
} from "../../../../lib/endpoints";
import { getV2, postV2 } from "../../../../services/http-service-v2";
import authContext from "../../../../store/auth-context";
import cartContext from "../../../../store/cart-context";
import { useRef } from "react";
import { toast } from "react-toastify";
import Suspense from "../../../Sheared/Suspense/Suspense";
import DatePickerHeader from "../../../Sheared/SharedDate/DatePickerHeader";
import { humanizeDate } from "../../../../lib/utils";

const NewCustomarInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { profile, isAuthenticated, isAuthenticating } =
    useContext(authContext);
  const { rooms, totalAmount, clear } = useContext(cartContext);
  const { Id } = profile;
  const [error, setError] = useState(null);
  const mounted = useRef(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

 

  //form validations State
  const [FirstName, setFname] = useState("");
  const [LastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [fax, setFax] = useState("");
  const [address, setAddress] = useState("");
  const [idNum, setIdNum] = useState("");
  const [country, setCountry] = useState({ name: "Bangladesh", code: "BD" });
  const [dob, setDob] = useState(new Date());
  const [expDate, setExpDate] = useState(new Date());
  const [identity, setIdentity] = useState({});
  const [gender, setGender] = useState({});
  const [paymentPercent, setPaymentPercent] = useState("100%");



  // const formatDate = (date) => {
  //   const passedDate = new Date(date);
  //   const year = passedDate.getFullYear();
  //   let month = (1 + passedDate.getMonth()).toString();
  //   month = month.length > 1 ? month : "0" + month;
  //   let day = passedDate.getDate().toString();
  //   day = day.length > 1 ? day : "0" + day;
  //   return `${year}-${month}-${day}`;
  // };
  

  const handleClicekd = (percent) => {
    setPaymentPercent(percent);
  };

  //form validations handeler
  const fnameChangeHandler = (FirstName) => {
    setFname(FirstName);
  };
  const lnameChangeHandler = (LastName) => {
    setLname(LastName);
  };
  const genderChangeHandler = (gender) => {
    setGender(gender);
  };
  const emailChangeHandler = (email) => {
    setEmail(email);
  };
  const phoneChangeHandler = (Phone) => {
    setPhone(Phone);
  };
  const countryChangeHandler = (country) => {
    setCountry(country);
  };
  const cityChangeHandler = (city) => {
    setCity(city);
  };
  const mstateChangeHandler = (state) => {
    setState(state);
  };
  const pcodeChangeHandler = (postalCode) => {
    setPostalCode(postalCode);
  };
  const faxChangeHandler = (fax) => {
    setFax(fax);
  };
  const addressChangeHandler = (address) => {
    setAddress(address);
  };
  const identityChangeHandler = (identity) => {
    setIdentity(identity);
  };
  const idnumChangeHandler = (idnum) => {
    setIdNum(idnum);
  };
  const expDateChangeHandler = (expDate) => {
    setExpDate(expDate);
  };
  const dobChangeHandler = (dob) => {
    setDob(dob);
  };

  const getProfileInfo = useCallback(() => {
    setIsLoading(true);
    getV2({ url: GET_USER_PROFILE })
      .then((data) => {
        if (!data.IsError) {
          setIsLoading(false);
          setFname(data.Data.FirstName);
          setLname(data.Data.LastName);
          setGender({ name: data.Data.Gender, id: data.Data.Gender });
          setEmail(data.Data.Email);
          setPhone(data.Data.Phone);
          setCountry({ name: data.Data.Country, code: data.Data.Country });
          setCity(data.Data.City);
          setState(data.Data.State);
          setPostalCode(data.Data.PostalCode);
          setFax(data.Data.Fax);
          setAddress(data.Data.Address);
          setIdentity({
            name: data.Data.IdentityType,
            id: data.Data.IdentityType,
          });
          setIdNum(data.Data.IdentityNumber);
          setExpDate(data.Data.IdentityExpireDate ?? new Date());
          setDob(data.Data.DateOfBirth ?? new Date());

        } else {
          alert("Error");
        }
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    if (!mounted.current) {
      getProfileInfo();
      mounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  const postProfileInfo = useCallback((payload) => {
    return postV2({ url: POST_UPDATE_PROFILE, payload })
      .then((data) => {
        if (!data.IsError) {
          console.log(data);
          setFname(data.Data.FirstName);
          setLname(data.Data.LastName);
          setGender({ name: data.Data.Gender, id: data.Data.Gender });
          setEmail(data.Data.Email);
          setPhone(data.Data.Phone);
          setCountry({ name: data.Data.Country, code: data.Data.Country });
          setCity(data.Data.City);
          setState(data.Data.State);
          setPostalCode(data.Data.PostalCode);
          setFax(data.Data.Fax);
          setAddress(data.Data.Address);
          setIdentity({
            name: data.Data.IdentityType,
            id: data.Data.IdentityType,
          });
          setIdNum(data.Data.IdentityNumber);
          setExpDate(data.Data.IdentityExpireDate ? data.Data.IdentityExpireDate : new Date());
          setDob(data.Data.DateOfBirth ? data.Data.DateOfBirth : new Date());
        } else {
          console.log(data);
          alert("Error");
        }
      })
      .catch((error) => {});
  }, []);

  //checkout suymmery
  const newTax = totalAmount * 0.15;
  const grandTotal = totalAmount + newTax;

  //post booking
  const bookingRequest = () => {
    // const paymentAmount = paymentPercent === "100%" ? grandTotal : grandTotal * 0.3;
    const payload = {
      Tax: newTax,
      RoomCharge: totalAmount,
      Payable: grandTotal,
      AdvancePaying: 0,
      PayPercent: paymentPercent,
      Places: rooms.map((r) => ({
        Id: r.Id,
        Quantity: r.quantity,
        Type: r.Type,
        ArrivalDate: r.arrivalDate,
        DepartureDate: r.departureDate,
        Name: r.Name,
      })),
    };
    postV2({ url: POST_ROOM_BOOKING, payload })
      .then((data) => {
        if (!data.IsError) {
          if (data.Data.PaymentURL === "") {
            toast.warning(`Invalid Information`);
          } else {
            window.location.href = data.Data.PaymentURL;
          }
          clear();
        } else {
          setError("inside err", data.Msg);
        }
      })
      .catch((err) => {
        // toast.warning("Invalid Amount");
        toast.warning("An error occurred while processing your request.", err);
      });
  };


  const checkField = (fieldName) => {
    if (!fieldName) {
      return true;
    }
    return false;
  };
  

  const submitHandler = () => {
    let emptyFields = [];
    if (checkField(LastName)) {
      emptyFields.push('Last Name');
    }
    if (checkField(FirstName)) {
      emptyFields.push('First Name');
    }
    if (checkField(identity.id)) {
      emptyFields.push('Identity');
    }
    if (checkField(idNum)) {
      emptyFields.push('Id Number');
    }
    if (checkField(expDate)) {
      emptyFields.push('Expiry Date');
    }
    if (checkField(dob)) {
      emptyFields.push('Date of Birth');
    }

    if (emptyFields.length > 0) {
      const errorMessage = `${emptyFields.join(', ')} ${emptyFields.length > 1 ? 'are' : 'is'} required.`;
      toast.warning(errorMessage);
      return;
    }

    setIsLoading(true);
    const payload = {
      FirstName: FirstName,
      LastName: LastName,
      Phone: Phone,
      Gender: gender.id,
      Email: email,
      Country: country.name,
      City: city,
      State: state,
      PostalCode: postalCode,
      Fax: fax,
      Address: address,
      IdentityType: identity.id,
      IdentityNumber: idNum,
      IdentityExpireDate: expDate,
      DateOfBirth: dob,
      Id: Id,
      Remarks: "hey",
      ChangeLog: "cng",
    };
    postProfileInfo(payload)
      .then(() => {
        bookingRequest();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


  // useEffect(()=> {
  //   if (!isAuthenticating && isAuthenticated) {
  //     getProfileInfo();
  //     mounted.current = true;
  //   }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[isAuthenticating, isAuthenticated,])

  useEffect(() => {
    if (!mounted.current && !isAuthenticating && isAuthenticated) {
      getProfileInfo();
      mounted.current = true;
    }
  }, [isAuthenticating, isAuthenticated]);

  useEffect(() => {
    mounted.current = false;
  }, [isAuthenticated]);

  return (
    <>
      <div id="Tab1" className="tabcontent">
        <div className="customar-detaits-main">
          <h2>Customer Details</h2>
          <div className="customar-dts-from">
            <form>
              <div className="customar-dts-from-flex">
                <div className="customar-dts-from-inner-flex">
                  <div className="custom-input-resort">
                    <Input
                      label={"First Name"}
                      onChange={fnameChangeHandler}
                      value={FirstName}
                      placeholder={"First Name"}
                      required
                    />
                  </div>
                  <div className="custom-input-resort">
                    <Input
                      label={"Last Name"}
                      onChange={lnameChangeHandler}
                      value={LastName}
                      placeholder={"Last Name"}
                      required
                    />
                  </div>

                  <div className="custom-input-resort">
                    <AutoComplete
                      dataset={[
                        { name: "Male", id: "Male" },
                        { name: "Female", id: "Female" },
                        { name: "Other", id: "Other" },
                      ]}
                      idField={"id"}
                      nameField={"name"}
                      label={"Gender"}
                      onChange={genderChangeHandler}
                      previewText={"Select Gender Type"}
                      readyToLoad={true}
                      value={gender}
                      placeholder={"--Select--"}
                    />
                  </div>
                </div>
                <div className="warining"></div>
                <div className="customar-dts-from-inner-flex">
                  <div className="custom-input-resort">
                    <Input
                      label={"Phone"}
                      onChange={phoneChangeHandler}
                      value={Phone}
                      placeholder={"phone"}
                      required
                      disabled
                    />
                  </div>
                  <div className="custom-input-resort">
                    <Input
                      label={"Email"}
                      onChange={emailChangeHandler}
                      value={email}
                      placeholder={"Email"}
                    />
                  </div>
                  <div className="custom-input-resort">
                    <AutoComplete
                      dataset={countries}
                      idField={"id"}
                      nameField={"name"}
                      label={"Country"}
                      onChange={countryChangeHandler}
                      previewText={"Select Identity Type"}
                      readyToLoad={true}
                      placeholder={"--Select--"}
                      value={country}
                    />
                  </div>
                </div>
                <div className="customar-dts-from-inner-flex customar-dts-from-inner-flex2">
                  <div className="custom-input-resort">
                    <Input
                      label={"City"}
                      onChange={cityChangeHandler}
                      value={city}
                      placeholder={"City"}
                    />
                  </div>
                  <div className="custom-input-resort">
                    <Input
                      label={"State"}
                      onChange={mstateChangeHandler}
                      value={state}
                      placeholder={"State"}
                    />
                  </div>
                  <div className="custom-input-resort">
                    <Input
                      label={"Postal Code"}
                      onChange={pcodeChangeHandler}
                      value={postalCode}
                      placeholder={"Postal Code"}
                    />
                  </div>
                  <div className="custom-input-resort">
                    <Input
                      label={"Fax"}
                      onChange={faxChangeHandler}
                      value={fax}
                      placeholder={"Fax"}
                    />
                  </div>
                </div>
                <div className="custom-input-resort extera-adrs">
                  <Textarea
                    label={"Address"}
                    onChange={addressChangeHandler}
                    value={address}
                    placeholder={"Address"}
                  />
                </div>
                <div className="customar-dts-from-inner-flex customar-dts-from-inner-flex2">
                  <div className="custom-input-resort">
                    <AutoComplete
                      dataset={[
                        { name: "Passport", id: "Passport" },
                        { name: "Driving License", id: "Driving License" },
                        { name: "National ID", id: "National ID" },
                      ]}
                      idField={"id"}
                      nameField={"name"}
                      label={"Identity"}
                      onChange={identityChangeHandler}
                      previewText={"Select Identity Type"}
                      readyToLoad={true}
                      value={identity}
                      placeholder={"--Select--"}
                      required
                    />
                  </div>
                  <div className="custom-input-resort">
                    <Input
                      label={"No"}
                      onChange={idnumChangeHandler}
                      value={idNum}
                      placeholder={"No"}
                      required
                    />
                  </div>
                  <div className="custom-input-resort input-append ">
                  <label>Date of Expiry *</label>
                    <DatePicker
                      renderCustomHeader={DatePickerHeader}
                      onChange={expDateChangeHandler}
                      // dateFormat="yyyy-MM-dd"
                      placeholderText="dd-MM-yyyy"
                      value={humanizeDate(expDate) ? humanizeDate(expDate) : null }
                    />
                  </div>
                  <div className="custom-input-resort input-append ">
                    <label>Date of Birth *</label>
                    <DatePicker
                      renderCustomHeader={DatePickerHeader}
                      onChange={dobChangeHandler}
                      // dateFormat="yyyy-MM-dd"
                      placeholderText="dd-MM-yyyy"
                      value={humanizeDate(dob) ? humanizeDate(dob) : null }
                    />
                  </div>
                </div>
                <div className="paymet-radio-btn">
                  <input
                    defaultChecked={paymentPercent === "100%"}
                    type="radio"
                    onClick={handleClicekd.bind(null, "100%")}
                    id="html"
                    name="payfull"
                    value="HTML"
                  />
                  <label
                    className="percent"
                    onClick={handleClicekd.bind(null, "100%")}
                    htmlFor="html"
                  >
                    Pay Full Payment
                  </label>
                  <input
                    defaultChecked={paymentPercent === "30%"}
                    type="radio"
                    onClick={handleClicekd.bind(null, "30%")}
                    id="css"
                    name="payfull"
                    value="CSS"
                  />
                  <label
                    onClick={handleClicekd.bind(null, "30%")}
                    htmlFor="css"
                  >
                    Pay 30% Payment
                  </label>
                </div>
                <div className="toggle-condition">
                  <p className="trams-condition">
                    <label onChange={handleCheckboxChange}>
                      <input
                        className="trams-checkbox"
                        type="checkbox"
                        name="tos"
                        value="trams"
                        defaultChecked={isChecked}
                      />
                      I agree with{" "}
                      <div className="trams-condition-flex">
                        <Link to="/termsconditions" target="_blank">
                          Terms and Conditions,
                        </Link>
                        <Link to="/privacypolicy" target="_blank">
                          Privacy Policy,
                        </Link>
                        <Link to="/refund" target="_blank">
                         Refund Policy
                        </Link>
                      </div>
                      
                    </label>
                  </p>
                  {/* <div
                    onClick={submitHandler}
                    className="book_table_item dtl-btn"
                  >
                    <button type="button" disabled={!isChecked}>
                      Submit
                    </button>
                  </div> */}
                </div>
              </div>
            </form>
          </div>
        </div>
        {isLoading && <Suspense />}
        {/* {error && <p>inside err</p>} */}
      </div>
    </>
  );
};

export default NewCustomarInfo;
