import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import commonBg from "../../../images/room.webp";
import appContext from "../../../store/app-context";
import AutoComplete from "../../Sheared/AutoComplete/AutoComplete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Suspense from "../../Sheared/Suspense/Suspense";
import { toast } from "react-toastify";
import { getV2 } from "../../../services/http-service-v2";
import { GET_SEARCH_BOOKING_ROOM_ISAVAIBLE } from "../../../lib/endpoints";
import { useRef } from "react";
import { subDays } from "date-fns";
import cartContext from "../../../store/cart-context";

const today = new Date();
const SearchRoomFilter = ({ setIsAvailble }) => {
  const { filters, storeFilters } = useContext(appContext);
  const {clear} = useContext(cartContext)
  const [isLoading, setIsLoading] = useState(false);
  const mounted = useRef(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isCalendarOpenTwo, setIsCalendarOpenTwo] = useState(false);
  const [adults, setAdults] = useState({});
  const [children, setChildren] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(new Date().setDate(today.getDate() + 1))
  );

  const arrivalBlurHandler = (time, x) => {
    setStartDate(time);
    storeFilters({ ...filters, arrivalDate: time });
    // submitHandler(
    //   children.id,
    //   adults.id,
    //   new Date(time)?.toDateString(),
    //   new Date(endDate)?.toDateString()
    // );
  };

  const depdateChangeHandler = (depdate) => {
    storeFilters({ ...filters, departureDate: depdate });
    setEndDate(depdate);
    submitHandler(
      children.id,
      adults.id,
      new Date(startDate)?.toDateString(),
      new Date(depdate)?.toDateString()
    );
  };


  const adultsBlurHandler = (fadults) => {
    storeFilters({ ...filters, adultsCount: fadults.adults });
    setAdults(fadults);
    submitHandler(
      children.id,
      fadults.id,
      new Date(startDate)?.toDateString(),
      new Date(endDate)?.toDateString()
    );
  };

  const childrenBlurHandler = (fchild) => {
    storeFilters({ ...filters, childrenCount: fchild.children });
    setChildren(fchild);
    submitHandler(
      fchild.id,
      adults.id,
      new Date(startDate)?.toDateString(),
      new Date(endDate)?.toDateString()
    );
  };

  const submitHandler = (c, a, ArrivalTime, DepartureTime) => {
    setIsLoading(true);
    getV2({ url: GET_SEARCH_BOOKING_ROOM_ISAVAIBLE(999, 1, c, a, ArrivalTime, DepartureTime),onError:(response)=>{
      toast.warning(response.Msg);
    } })
      .then((data) => {
        if (!data.IsError) {
          if (data.Data) {
            setIsAvailble(data.Data.Data);
            // clear()
          } else {
            setIsAvailble([]);
            toast.warning(`the date you have selected is not Available. Please Change the Arrival Date and Departure Date.`);
          }
        } else {
          setIsAvailble([]);
          toast.warning(`${data.Msg}`);
        }
      })
      .catch((err) => {
        setIsAvailble([]);
        // toast.warning(`Incorrect Date Range!! Please Change the Arrival Date and Departure Date.`);
        // toast.warning(err?.toString());
        console.log("filter Main:",err)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


  useEffect(() => {
    if (!mounted.current) {
      submitHandler(
        children.id,
        adults.id,
        new Date(startDate)?.toDateString(),
        new Date(endDate)?.toDateString()
      );
      mounted.current = true;
      storeFilters({
        ...filters,
        arrivalDate: startDate,
        departureDate: endDate,
        adultsCount: adults.id,
        childrenCount: children.id,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  return (
    <section
      className="banner-area other-page-area"
      style={{ backgroundImage: `url(${commonBg})` }}
    >
      <div className="container">
        <div className="hotel-booking-search hotel-booking-search-parent">
          <form name="hb-search-form" action="">
            <div className="book_table_inner">
              <div className="book_table_item disable-input-append">
                <span>Arrival Date</span>
                <div className="input-append">
                  <DatePicker
                    selected={startDate}
                    onChange={arrivalBlurHandler}
                    onSelect={() => setIsCalendarOpen(false)}
                    onFocus={() => setIsCalendarOpen(true)}
                    onBlur={() => setTimeout(() => setIsCalendarOpen(false), 100)}
                    open={isCalendarOpen} 
                    minDate={new Date()}
                    showDisabledMonthNavigation
                    placeholderText="dd/mm/yyyy"
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
                    onSelect={() => setIsCalendarOpenTwo(false)}
                    onFocus={() => setIsCalendarOpenTwo(true)}
                    onBlur={() => setTimeout(() => setIsCalendarOpenTwo(false), 100)}
                    open={isCalendarOpenTwo}
                    minDate={subDays(new Date(), -1)}
                    showDisabledMonthNavigation
                    placeholderText="mm/dd/yyyy"
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
                />
              </div>
              <div className="book_table_item">
                <AutoComplete
                  dataset={[
                    { children: 0, id: 0 },
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
                <button disabled onClick={submitHandler} type="button">
                  Check Availability
                </button>
              </div> */}
            </div>
          </form>
        </div>
      </div>
      {isLoading && <Suspense />}
    </section>
  );
};

export default SearchRoomFilter;
