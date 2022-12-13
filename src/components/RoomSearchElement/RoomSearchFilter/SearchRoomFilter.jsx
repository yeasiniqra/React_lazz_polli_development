import React from "react";
import { useContext } from "react";
import { useState } from "react";
import commonBg from "../../../images/room.jpg";
import appContext from "../../../store/app-context";
import AutoComplete from "../../Sheared/AutoComplete/AutoComplete";
// import Input from "../../Sheared/Input/Input";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const today = new Date();

const SearchRoomFilter = () => {
  const { filters, storeFilters } = useContext(appContext);

  const [arrdate, setArrdate] = useState("");
  const [depdate, setDepdate] = useState("");
  const [adults, setAdults] = useState({});
  const [children, setChildren] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date().setDate(today.getDate() + 1));

  // const arrdateChangeHandler = (arrdate) => {
  //   setArrdate(arrdate);
  // };

  const depdateChangeHandler = (depdate) => {
    setDepdate(depdate)
    storeFilters({...filters, departureDate : depdate})
    setEndDate(depdate)
  };


  const arrivalBlurHandler = (time, x) => {
    setStartDate(time);
    storeFilters({...filters, arrivalDate: time});
    setArrdate(time);
  }

  // const depdateBlurHandler = (dtime) => {
  //   setDepdate(dtime)
  //   storeFilters({...filters, departureDate : dtime})
  //   setEndDate(dtime)
  // }
  
  // const depdateBlurHandler = (dtime) => {
  //   storeFilters({...filters, departureDate : dtime})
  // }

  const adultsBlurHandler = (fadults) => {
    storeFilters({...filters, adultsCount : fadults.adults});
    setAdults(fadults);
  }


  const childrenBlurHandler = (fchild) => {
    storeFilters({...filters, childrenCount : fchild.children})
    setChildren(fchild);
  }


  const submitHandler = () => {
    const errors = [];

    if (arrdate.length < 1) errors.push("Arrival Date");
    if (depdate.length < 1) errors.push("Departure Date");
    if (!!!adults.id) errors.push("Adults");
    //  if(!!!children.id) errors.push('children')

    if (errors.length !== 0) {
      console.log(errors.join(", ") + " Are Required");
      alert(`${errors.join(", ")} Are Required`)
      return false;
    }

    console.log({
      arrdate: arrdate,
      depdate: depdate,
      adults: adults,
      children: children
    });
  };

  


  return (
    <section
      className="banner-area other-page-area"
      style={{ backgroundImage: `url(${commonBg})` }}
    >
      <div className="container">
        <div className="hotel-booking-search">
    
          <form name="hb-search-form" action="">
            <div className="book_table_inner">
            
              <div className="book_table_item disable-input-append">
                <span>Arrival Date</span>
                <div className="input-append">
                 <DatePicker
                    selected={startDate}
                    onChange={arrivalBlurHandler}
                    minDate={new Date()}
                    showDisabledMonthNavigation
                    placeholderText = "dd/mm/yyyy"
                    monthsShown={2}
                    showTimeSelect
                    showYearDropdown
                  />
                  <div className="claender-btn">
                    <div className="add-on">
                       <i className="fa fa-calendar" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="book_table_item disable-input-append">
                <span>Departure Date</span>
                <div className="input-append">
                 <DatePicker
                    selected={endDate}
                    onChange={depdateChangeHandler}
                    showDisabledMonthNavigation
                    placeholderText = "mm/dd/yyyy"
                    monthsShown={2}
                    showTimeSelect
                    showYearDropdown
                  />
                  <div className="claender-btn">
                    <div className="add-on">
                       <i className="fa fa-calendar" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="book_table_item">
                <AutoComplete
                  dataset={[
                    { adults: 1, id: 1 },
                    { adults: 2, id: 2 },
                    { adults: 3, id: 3 },
                    { adults: 4, id: 4 },
                    { adults: 5, id: 5 },
                  ]}
                  idField={"id"}
                  nameField={"adults"}
                  label={"Adults"}
                  readyToLoad={true}
                  value={adults}
                  placeholder={"--Select--"}
                  onChange={adultsBlurHandler}
                  required
                  
                />
              </div>
              <div className="book_table_item">
                <AutoComplete
                  dataset={[
                    { children: 1, id: 1 },
                    { children: 2, id: 2 },
                    { children: 3, id: 3 },
                    { children: 4, id: 4 },
                    { children: 5, id: 5 },
                  ]}
                  idField={"id"}
                  nameField={"children"}
                  label={"Children"}
                  onChange={childrenBlurHandler}
                  readyToLoad={true}
                  value={children}
                  placeholder={"--Select--"}
                />
              </div>
              <div className="book_table_item book_table_item_mobile">
                <button onClick={submitHandler} type="button">
                  Check Availability
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchRoomFilter;
