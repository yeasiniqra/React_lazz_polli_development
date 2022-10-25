import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { countries } from "../../../../data/countries";
import Alert from "../../../Sheared/alert/Alert";
import AutoComplete from "../../../Sheared/AutoComplete/AutoComplete";
import Input from "../../../Sheared/Input/Input";
import Textarea from "../../../Sheared/Textarea/Textarea";

const NewCustomarInfo = () => {
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

  const [alert, setAlert] = useState({ show: false, text: "" });

  const alertCloseHandler = () => {
    setAlert({ show: false, text: "" });
  };

  const checkClickHandler = () => {
    setAlert({
      show: true,
      text: `Your submission has been received. Your order number is "0070230090". Our agent will call your number "0172000000" to reconfirm.`,
    });
  };

  //form validations code
  const fnameChangeHandler = (fname) => {
    setFname(fname);
  };
  const lnameChangeHandler = (lname) => {
    setLname(lname);
  };
  const emailChangeHandler = (email) => {
    setEmail(email);
  };
  const phoneChangeHandler = (phone) => {
    setPhone(phone);
  };

  const cityChangeHandler = (city) => {
    setCity(city);
  };
  const mstateChangeHandler = (mstate) => {
    setMstate(mstate);
  };
  const pcodeChangeHandler = (pcode) => {
    setPcode(pcode);
  };
  const faxChangeHandler = (fax) => {
    setFax(fax);
  };
  const addressChangeHandler = (address) => {
    setAddress(address);
  };
  const idnumChangeHandler = (idnum) => {
    setIdNum(idnum);
  };

  const countryChangeHandler = (country) => {
    setCountry(country);
  };

  const expDateChangeHandler = (expDate) => {
    setExpDate(expDate);
  };
  const dobChangeHandler = (dob) => {
    setDob(dob);
  };
  const identityChangeHandler = (identity) => {
    setIdentity(identity);
  };
  const genderChangeHandler = (gender) => {
    setGender(gender);
  };

  const submitHandler = () => {
    const errors = [];

    if (fname.length < 1) errors.push("First Name");
    if (lname.length < 1) errors.push("Last Name");
    if (!!!gender.id) errors.push("Gender");
    if (!!!country.name) errors.push("Country");
    if (!!!identity.id) errors.push("identity");
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      errors.push("Email");
    if (phone.length !== 11) errors.push("phone");
    if (city.length < 1) errors.push("city");
    if (mstate.length < 1) errors.push("State");
    if (pcode.length < 1) errors.push("Postal Code");
    if (fax.length < 1) errors.push("fax");
    if (address.length === 0) errors.push("Address");
    if (idNum.length === 0) errors.push("No");
    if (dob.length === 0) errors.push("Dath of Birth");

    if (errors.length !== 0) {
      console.log(errors.join(", ") + " Are Required");
      return false;
    }

    console.log({
      fname: fname,
      lname: lname,
      gender: gender,
      expDate: expDate,
      email: email,
      phone: phone,
      city: city,
      mstate: mstate,
      pcode: pcode,
      fax: fax,
      address: address,
      idNum: idNum,
      country: country,
      identity: identity,
    });
  };

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
                      label={"Email"}
                      onChange={emailChangeHandler}
                      value={email}
                      placeholder={"Email"}
                      required
                    />
                  </div>

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
                <div className="book_table_item dtl-btn">
                  <button
                    // data-modal="modal-one"
                    type="button"
                    onClick={submitHandler}
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Alert show={alert.show} text={alert.text} onClose={alertCloseHandler} />
    </>
  );
};

export default NewCustomarInfo;
