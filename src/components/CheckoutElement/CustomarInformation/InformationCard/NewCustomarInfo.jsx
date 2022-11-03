import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { countries } from "../../../../data/countries";
import checkoutContext from "../../../../store/checkout-context";
import Alert from "../../../Sheared/alert/Alert";
import AutoComplete from "../../../Sheared/AutoComplete/AutoComplete";
import Input from "../../../Sheared/Input/Input";
import Textarea from "../../../Sheared/Textarea/Textarea";

const NewCustomarInfo = () => {
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
  const [otp, setOtp] = useState({});

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

  const otpChangeHandler = (otp) => {
    setOtp(otp);
    storeForms({ ...formValus, otp: otp });
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
    setOtp(formValus.otp);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //start alert for submit

  const [alert, setAlert] = useState({ show: false, text: "" });

  const alertCloseHandler = () => {
    setAlert({ show: false, text: "" });
  };

  const checkClickHandler = () => {
    setAlert({
      show: true,
      btn: "fff",
      text: `Your submission has been received. Your order number is "0070230090". Our agent will call your number "0172000000" to reconfirm.`,
    });
  };

  //End alert for submit

  const submitHandler = () => {
    const errors = [];

    // if (fname.length < 1) errors.push("First Name");
    // if (lname.length < 1) errors.push("Last Name");
    // if (!!!gender.id) errors.push("Gender");
    // if (!!!country.name) errors.push("Country");
    // if (!!!identity.id) errors.push("identity");
    // if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    //   errors.push("Email");
    // if (phone.length !== 11) errors.push("phone");
    // if (city.length < 1) errors.push("city");
    // if (mstate.length < 1) errors.push("State");
    // if (pcode.length < 1) errors.push("Postal Code");
    // if (fax.length < 1) errors.push("fax");
    // if (address.length === 0) errors.push("Address");
    // if (idNum.length === 0) errors.push("No");
    // if (dob.length === 0) errors.push("Dath of Birth");

    if (errors.length !== 0) {
      console.log(errors.join(", ") + " Are Required");
      return false;
    }

    console.log({
      // fname: fname,
      // lname: lname,
      // gender: gender,
      // expDate: expDate,
      // email: email,
      // phone: phone,
      // city: city,
      // mstate: mstate,
      // pcode: pcode,
      // fax: fax,
      // address: address,
      // idNum: idNum,
      // country: country,
      // identity: identity,
    });
    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
    setCity("");
    setMstate("");
    setPcode("");
    setFax("");
    setAddress("");
    setIdNum("");
    setCountry("{}");
    setExpDate("");
    setDob("");
    setIdentity("{}");
    setGender("{}");
    setOtp("");
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

                {phone ? (
                  <div className="phone-verifaction-sec">
                    <h2>Verify Phone Number</h2>
                    <div className="custom-input-resort otp-input">
                      <Input
                        label={"Please Enter Your OTP Code"}
                        onChange={otpChangeHandler}
                        value={otp}
                        placeholder={"Otp"}
                        required
                      />
                    </div>
                    <div className="otp-send">
                      <span>
                        Did not get OTP code ? <Link to="/#">Resend</Link>
                      </span>
                      <div className="book_table_item dtl-btn">
                        <button type="button" onClick={checkClickHandler}>
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
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
                        // data-modal="modal-one"
                        type="button"
                      >
                        Check Out
                      </button>
                    </div>
                  </div>
                )}
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
