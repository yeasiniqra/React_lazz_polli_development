import React, { useCallback } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { countries } from "../../../../data/countries";
import checkoutContext from "../../../../store/checkout-context";
import AutoComplete from "../../../Sheared/AutoComplete/AutoComplete";
import Input from "../../../Sheared/Input/Input";
import Textarea from "../../../Sheared/Textarea/Textarea";
import {  GET_USER_PROFILE, POST_ROOM_BOOKING, POST_UPDATE_PROFILE } from "../../../../lib/endpoints";
import { getV2, postV2 } from "../../../../services/http-service-v2";
import authContext from "../../../../store/auth-context";
import cartContext from "../../../../store/cart-context";

const NewCustomarInfo = () => {
  const { formValus, storeForms } = useContext(checkoutContext);
  const {profile, isAuthenticated, isAuthenticating} = useContext(authContext)

  const {rooms, totalAmount} = useContext(cartContext)
  const [isActiveSub, setActiveSub] = useState(false);
 
  // const {Name,arrivalDate,departureDate,amount,type,quantity} = rooms;


  console.log(rooms)

  const {Id} = profile
  const [error, setError] = useState(null);

  function formatDate(date) {
    return date.toISOString().slice(0, 10);
  }

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
  const [country, setCountry] = useState({});
  const [expDate, setExpDate] = useState("");
  const [dob, setDob] = useState("");
  const [identity, setIdentity] = useState({});
  const [gender, setGender] = useState({});
  // const [Id, setId] = useState('')


  //form validations handeler
  const fnameChangeHandler = (FirstName) => {
    setFname(FirstName);
    storeForms({ ...formValus, firstName: FirstName });
  };
  const lnameChangeHandler = (LastName) => {
    setLname(LastName);
    storeForms({ ...formValus, lastName: LastName });
  };

  const genderChangeHandler = (gender) => {
    setGender(gender);
    storeForms({ ...formValus, gender: gender });
  };

  const emailChangeHandler = (email) => {
    setEmail(email);
    storeForms({ ...formValus, email: email });
  };

  const phoneChangeHandler = (Phone) => {
    setPhone(Phone);
    storeForms({ ...formValus, Phone: Phone });
  };

  const countryChangeHandler = (country) => {
    setCountry(country);
    // storeForms({ ...formValus, country: country });
  };

  const cityChangeHandler = (city) => {
    setCity(city);
    storeForms({ ...formValus, city: city });
  };

  const mstateChangeHandler = (state) => {
    setState(state);
    storeForms({ ...formValus, state: state });
  };

  const pcodeChangeHandler = (postalCode) => {
    setPostalCode(postalCode);
    storeForms({ ...formValus, postalCode: postalCode });
  };

  const faxChangeHandler = (fax) => {
    setFax(fax);
    storeForms({ ...formValus, fax: fax });
  };

  const addressChangeHandler = (address) => {
    setAddress(address);
    storeForms({ ...formValus, address: address });
  };

  const identityChangeHandler = (identity) => {
    setIdentity(identity);
    storeForms({ ...formValus, identity: identity });
  };

  const idnumChangeHandler = (idnum) => {
    setIdNum(idnum);
    storeForms({ ...formValus, idnum: idnum });
  };

  const expDateChangeHandler = (expDate) => {
    setExpDate(expDate);
    storeForms({ ...formValus, expiryDate: expDate });
  };
  const dobChangeHandler = (dob) => {
    setDob(dob);
    storeForms({ ...formValus, dateOfBirth: dob });
  };


  const getProfileInfo = useCallback(() => {
    getV2({url: GET_USER_PROFILE})
    .then(data => {
      if(!data.IsError){
       console.log(data);
       setFname(data.Data.FirstName);
       setLname(data.Data.LastName);
       setGender( { name: data.Data.Gender, id: data.Data.Gender });
       setEmail(data.Data.Email);  
       setPhone(data.Data.Phone);
       setCountry({name : data.Data.Country, code : data.Data.Country});
       setCity(data.Data.City);
       setState(data.Data.State);
       setPostalCode(data.Data.PostalCode);
       setFax(data.Data.Fax);
       setAddress(data.Data.Address);
       setIdentity({name : data.Data.IdentityType, id : data.Data.IdentityType});
       setIdNum(data.Data.IdentityNumber);
       setExpDate(data.Data.IdentityExpireDate);
       setDob(data.Data.DateOfBirth);
       
      } else {
        console.log(data);
       alert('Error')
      }
      
    }).catch(error => {
     
    });
  }, []);


  useEffect(() => {
    getProfileInfo()
}, [getProfileInfo]);



  const postProfileInfo = useCallback((payload) => {
   return postV2({url: POST_UPDATE_PROFILE, payload})
    .then(data => {
      if(!data.IsError){
       console.log(data);
       setFname(data.Data.FirstName);
       setLname(data.Data.LastName);
       setGender( { name: data.Data.Gender, id: data.Data.Gender });
       setEmail(data.Data.Email);  
       setPhone(data.Data.Phone);
       setCountry({name : data.Data.Country, code : data.Data.Country});
       setCity(data.Data.City);
       setState(data.Data.State);
       setPostalCode(data.Data.PostalCode);
       setFax(data.Data.Fax);
       setAddress(data.Data.Address);
       setIdentity({name : data.Data.IdentityType, id : data.Data.IdentityType});
       setIdNum(data.Data.IdentityNumber);
       setExpDate(data.Data.IdentityExpireDate);
       setDob(data.Data.DateOfBirth);
       
      } else {
        console.log(data);
       alert('Error')
      }
      
    }).catch(error => {
     
    });
  }, []);


  //checkout suymmery 
  const newTax = totalAmount * 0.15;
  // console.log(typeof newTax)
  const grandTotal = totalAmount + newTax;


  //post booking 
  const bookingRequest = () => {
    const payload = {
        Tax : newTax,
        RoomCharge : totalAmount,
        Payable : grandTotal,
        Places: rooms.map(r => ({ Id: r.Id,
          Quantity: r.quantity,
          Type: r.type,
          ArrivalDate : r.arrivalDate,
          DepartureDate : r.departureDate,
          Name : r.Name,
        })),
    }
    postV2({ url: POST_ROOM_BOOKING, payload }).then((data) => {
      if (!data.IsError) {
        console.log(data)
      } else {
        console.log(data);
        setError('inside err', data.Msg);
      }
    });
  };


  const submitHandler = () => {
    const payload = {
      FirstName : FirstName,
      LastName : LastName,
      Phone : Phone,
      Gender : gender.id,
      Country : country.name,
      City : city,
      State : state,
      PostalCode : postalCode,
      Fax : fax,
      Address : address,
      IdentityType : identity.id,
      IdentityNumber : idNum,
      IdentityExpireDate : expDate,
      DateOfBirth : dob,
      Id : Id,
      Remarks : 'hey',
      ChangeLog : 'cng',
    }
    console.log(payload);
    postProfileInfo(payload).then(() => {
      bookingRequest()
    })
     
  };



    useEffect(() => {
      setFname(formValus.FirstName);
      setLname(formValus.LastName);
      setGender(formValus.gender);
      setEmail(formValus.email);  
      setPhone(formValus.Phone);
      setCountry(formValus.country);
      setCity(formValus.city);
      setState(formValus.state);
      setPostalCode(formValus.postalCode);
      setFax(formValus.fax);
      setAddress(formValus.address);
      setIdentity(formValus.identity);
      setIdNum(formValus.no);
      setExpDate(formValus.expiryDate);
      setDob(formValus.dateOfBirth);
    }, []);


    useEffect(()=> {
      if (!isAuthenticating && isAuthenticated) {
        getProfileInfo();
       // window.location.reload()
      }
    },[isAuthenticating, isAuthenticated,])


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
                      required
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
                      required
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
                      required
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
                      required
                    />
                  </div>

                  <div className="custom-input-resort">
                    <Input
                      label={"State"}
                      onChange={mstateChangeHandler}
                      value={state}
                      placeholder={"State"}
                      required
                    />
                  </div>

                  <div className="custom-input-resort">
                    <Input
                      label={"Postal Code"}
                      onChange={pcodeChangeHandler}
                      value={postalCode}
                      placeholder={"Postal Code"}
                      required
                    />
                  </div>

                  <div className="custom-input-resort">
                    <Input
                      label={"Fax"}
                      onChange={faxChangeHandler}
                      value={fax}
                      placeholder={"Fax"}
                      required
                    />
                  </div>
                </div>

                <div className="custom-input-resort extera-adrs">
                  <Textarea
                    label={"Address"}
                    onChange={addressChangeHandler}
                    value={address}
                    placeholder={"Address"}
                    required
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
                    <Input
                      label={"Expiry Date"}
                      onChange={expDateChangeHandler}
                      value={expDate}
                      required
                      type={"date"}
                    />
                    <button className="add-on" type="button">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                    </button>
                  </div>

                  <div className="custom-input-resort input-append ">
                    <Input
                      label={"Date of Birth"}
                      onChange={dobChangeHandler}
                      value={dob}
                      required
                      type={"date"}
                    />
                    <button className="add-on" type="button">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>

                  <div className="paymet-radio-btn">
                      <input type="radio" id="html" name="payfull" value="HTML" />
                      <label htmlFor="html">Pay Full Payment</label>
                      <input type="radio" id="css" name="payfull" value="CSS" />
                      <label htmlFor="css">Pay 30% Payment</label>
                  </div> 


                  <div className="toggle-condition">
                    <p className="trams-condition">
                      <label>
                        <input
                          className="trams-checkbox"
                          type="checkbox"
                          name="tos"
                          value="1"
                        />
                        I agree with{" "}
                        <Link to="#" target="_blank">
                          Terms and Conditions
                        </Link>
                      </label>
                    </p>
                    <div
                      onClick={submitHandler}
                      className="book_table_item dtl-btn"
                    >
                      <button
                        type="button"
                      >
                        Submit
                      </button>
                    </div>
                  </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCustomarInfo;
