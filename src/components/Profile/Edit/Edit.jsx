import React, { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import { countries } from "../../../data/countries";
import { useTitle } from "../../../hooks/UseTitle";
import { GET_USER_PROFILE, POST_UPDATE_PROFILE } from "../../../lib/endpoints";
import { getV2, postV2 } from "../../../services/http-service-v2";
import authContext from "../../../store/auth-context";
import AutoComplete from "../../Sheared/AutoComplete/AutoComplete";
import Input from "../../Sheared/Input/Input";
import Suspense from "../../Sheared/Suspense/Suspense";
import Textarea from "../../Sheared/Textarea/Textarea";

const Edit = () => {
    const [isLoading, setIsLoading] = useState(false);
    useTitle('Edit Profile')
    const {profile} = useContext(authContext)
    const {Id} = profile
    const mounted = useRef(false)

    const formatDate = (date) => {
      const passedDate = new Date(date);
      const year = passedDate.getFullYear();
      let month = (1 + passedDate.getMonth()).toString();
      month = month.length > 1 ? month : '0' + month;
      let day = passedDate.getDate().toString();
      day = day.length > 1 ? day : '0' + day;
      return `${year}-${month}-${day}`;
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
    const [expDate, setExpDate] = useState(null);
    const [dob, setDob] = useState(null);
    const [identity, setIdentity] = useState({});
    const [gender, setGender] = useState({});

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
      console.log(dob);
    };
  
    const getProfileInfo = useCallback(() => {
      setIsLoading(true)
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
      }).finally(()=> {
        setIsLoading(false)
      });
    }, []);

  useEffect(() => {
    if (!mounted.current) {
        getProfileInfo();
        mounted.current = true;
    }
  }, [mounted]);

    const postProfileInfo = useCallback((payload) => {
      setIsLoading(true)
      postV2({url: POST_UPDATE_PROFILE, payload})
      .then(data => {
        if(!data.IsError){
          setIsLoading(false)
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

    const submitHandler = () => {
      const payload = {
        FirstName : FirstName,
        LastName : LastName,
        Phone : Phone,
        Gender : gender.id,
        Email : email,
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
       postProfileInfo(payload)
    };
  
    return (
      <>
        <div id="Tab1" className="tabcontent">
          <div className="customar-detaits-main edit-profile">
            <h2>Edit Profile</h2>
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
                      <Input
                        label={"Expiry Date"}
                        onChange={expDateChangeHandler}
                        value={formatDate(expDate)}
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
                        value={formatDate(dob)}
                        required
                        type={"date"}
                      />
                      <button className="add-on" type="button">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                  <div
                    onClick={submitHandler}
                    className="book_table_item dtl-btn"
                  >
                    <button
                      type="button"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {isLoading && <Suspense/>}
      </>
    );
};

export default Edit;