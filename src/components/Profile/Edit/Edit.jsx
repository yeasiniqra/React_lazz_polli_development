import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { countries } from "../../../data/countries";
import { useTitle } from "../../../hooks/UseTitle";
import checkoutContext from "../../../store/checkout-context";
import AutoComplete from "../../Sheared/AutoComplete/AutoComplete";
import Input from "../../Sheared/Input/Input";
import Textarea from "../../Sheared/Textarea/Textarea";


const Edit = () => {
    useTitle('Edit Profile')
    const { formValus, storeForms } = useContext(checkoutContext);

    //form validations State
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [mstate, setMstate] = useState("");
    const [pcode, setPcode] = useState("");
    const [fax, setFax] = useState("");
    const [address, setAddress] = useState("");
    const [idNum, setIdNum] = useState("");
    const [country, setCountry] = useState({});
    const [expDate, setExpDate] = useState("");
    const [dob, setDob] = useState("");
    const [identity, setIdentity] = useState({});
    const [gender, setGender] = useState({});

  
    //form validations handeler
    const fnameChangeHandler = (fname) => {
      setFname(fname);
      storeForms({ ...formValus, firstName: fname });
    };
    const lnameChangeHandler = (lname) => {
      setLname(lname);
      storeForms({ ...formValus, lastName: lname });
    };
  
    const genderChangeHandler = (gender) => {
      setGender(gender);
      storeForms({ ...formValus, gender: gender });
    };
  
    const emailChangeHandler = (email) => {
      setEmail(email);
      storeForms({ ...formValus, email: email });
    };
  
    const phoneChangeHandler = (phone) => {
      setPhone(phone);
      storeForms({ ...formValus, phone: phone });
    };
  
    const countryChangeHandler = (country) => {
      setCountry(country);
      storeForms({ ...formValus, country: country });
    };
  
    const cityChangeHandler = (city) => {
      setCity(city);
      storeForms({ ...formValus, city: city });
    };
  
    const mstateChangeHandler = (mstate) => {
      setMstate(mstate);
      storeForms({ ...formValus, state: mstate });
    };
  
    const pcodeChangeHandler = (pcode) => {
      setPcode(pcode);
      storeForms({ ...formValus, postalCode: pcode });
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
      storeForms({ ...formValus, no: idnum });
    };
  
    const expDateChangeHandler = (expDate) => {
      setExpDate(expDate);
      storeForms({ ...formValus, expiryDate: expDate });
    };
    const dobChangeHandler = (dob) => {
      setDob(dob);
      storeForms({ ...formValus, dateOfBirth: dob });
    };
  
  
    useEffect(() => {
      setFname(formValus.firstName);
      setLname(formValus.lastName);
      setGender(formValus.gender);
      setEmail(formValus.email);
      setPhone(formValus.phone);
      setCountry(formValus.country);
      setCity(formValus.city);
      setMstate(formValus.state);
      setPcode(formValus.postalCode);
      setFax(formValus.fax);
      setAddress(formValus.address);
      setIdentity(formValus.identity);
      setIdNum(formValus.no);
      setExpDate(formValus.expiryDate);
      setDob(formValus.dateOfBirth);
 
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
 
    const submitHandler = () => {
        console.log('hey');
  
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
                        value={fname}
                        placeholder={"First Name"}
                        required
                    
                      />
                    </div>
  
                    <div className="custom-input-resort">
                      <Input
                        label={"Last Name"}
                        onChange={lnameChangeHandler}
                        value={lname}
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
                        value={phone}
                        placeholder={"phone"}
                        required
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
                        idField={"code"}
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
                        value={mstate}
                        placeholder={"State"}
                        required
                      />
                    </div>
  
                    <div className="custom-input-resort">
                      <Input
                        label={"Postal Code"}
                        onChange={pcodeChangeHandler}
                        value={pcode}
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

      </>
    );
};

export default Edit;