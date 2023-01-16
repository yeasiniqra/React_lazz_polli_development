import React from "react";
import { useContext } from "react";
import { useState } from "react";
import appContext from "../../../store/app-context";
// import AutoComplete from "../../Sheared/AutoComplete/AutoComplete";
// import Input from "../../Sheared/Input/Input";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getV2 } from "../../../services/http-service-v2";
import { GET_ROOM_BOOKING } from "../../../lib/endpoints";
import { toast } from "react-toastify";
import Suspense from "../../Sheared/Suspense/Suspense";

const today = new Date();

const SearchRoomFilterMdl = ({RoomId, Type}) => {
  const { filters, storeFilters } = useContext(appContext);
  const [isLoading, setIsLoading] = useState(false);

  // const [adults, setAdults] = useState({});
  // const [children, setChildren] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date().setDate(today.getDate() + 1));

  // const arrdateChangeHandler = (arrdate) => {
  //   setArrdate(arrdate);
  // };

  const depdateChangeHandler = (depdate) => {
    storeFilters({...filters, departureDate : depdate})
    setEndDate(depdate)
    submitHandler()
  };


  const arrivalBlurHandler = (time, x) => {
    setStartDate(time);
    storeFilters({...filters, arrivalDate: time});
    submitHandler()
  }

  // const depdateBlurHandler = (dtime) => {
  //   setDepdate(dtime)
  //   storeFilters({...filters, departureDate : dtime})
  //   setEndDate(dtime)
  // }
  
  // const depdateBlurHandler = (dtime) => {
  //   storeFilters({...filters, departureDate : dtime})
  // }

  // const adultsBlurHandler = (fadults) => {
  //   storeFilters({...filters, adultsCount : fadults.adults});
  //   setAdults(fadults);
  // }


  // const childrenBlurHandler = (fchild) => {
  //   storeFilters({...filters, childrenCount : fchild.children})
  //   setChildren(fchild);
  // }

  // const getHousess = useCallback(() => {
  //   getV2({ url: GET_SINGLE_HOUSES(Id) }).then((data) => {
  //     if (!data.IsError) {
  //         if (data.Data === null) {
  //             alert('')
  //         }
  //         setRoomSingle(data.Data);
  //     } else {
  //       //   console.log(data);
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   getHousess();
  // }, []);


  const submitHandler = () => {
      setIsLoading(true)
      getV2({ url: GET_ROOM_BOOKING(new Date(startDate)?.toDateString(), new Date(endDate)?.toDateString(), 1, RoomId, Type) }).then((data) => {
        if (!data.IsError) {
            alert("is Aviable")
        } else {
          alert('not Aviable')
          toast.warning(`this date not Available!`);
        }
      }).catch(err => {
        toast.warning(err?.toString());
      }).finally(() => {
        // Loader Close
        setIsLoading(false)
      });
 
    const errors = [];

    // if (arrdate.length < 1) errors.push("Arrival Date");
    // if (depdate.length < 1) errors.push("Departure Date");
    // if (!!!adults.id) errors.push("Adults");
    //  if(!!!children.id) errors.push('children')

    if (errors.length !== 0) {
      console.log(errors.join(", ") + " Are Required");
      alert(`${errors.join(", ")} Are Required`)
      return false;
    }

    console.log({
      // arrdate: arrdate,
      // depdate: depdate,
      // adults: adults,
      // children: children
    });

  };

  


  return (
      <div className="search-filter-modal-area">
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
              {/* <div className="book_table_item">
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
              </div> */}
              <div className="book_table_item book_table_item_mobile">
                {/* <button type="button">
                  Check
                </button> */}
              </div>
            </div>
          </form>
        </div>
        {isLoading && <Suspense />}
      </div>
  );
};

export default SearchRoomFilterMdl;
