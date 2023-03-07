import { useContext, useRef } from "react";
import { useState } from "react";
import appContext from "../../../store/app-context";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getV2 } from "../../../services/http-service-v2";
import { GET_ROOM_BOOKING_ISAVAIBLE } from "../../../lib/endpoints";
import { toast } from "react-toastify";
import Suspense from "../../Sheared/Suspense/Suspense";
import { useEffect } from "react";

const today = new Date();

const SearchRoomFilterMdl = ({ RoomId, Type, setIsAvailble }) => {
  const { filters, storeFilters } = useContext(appContext);
  const [isLoading, setIsLoading] = useState(false);
  const mounted = useRef(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isCalendarOpenTwo, setIsCalendarOpenTwo] = useState(false);
  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(new Date().setDate(today.getDate() + 1))
  );

  const depdateChangeHandler = (depdate) => {
    storeFilters({ ...filters, departureDate: depdate });
    setEndDate(depdate);
    submitHandler(
      new Date(startDate)?.toDateString(),
      new Date(depdate)?.toDateString()
    );
  };

  const arrivalBlurHandler = (time, x) => {
    setStartDate(time);
    storeFilters({ ...filters, arrivalDate: time });
    submitHandler(
      new Date(time)?.toDateString(),
      new Date(endDate)?.toDateString()
    );
  };

  const submitHandler = (d, r) => {
    setIsLoading(true);
    getV2({ url: GET_ROOM_BOOKING_ISAVAIBLE(d, r, 1, RoomId, Type) })
      .then((data) => {
        if (!data.IsError) {
          setIsAvailble(data.Data);
          if (data.Data) {
            // toast.warning(`${data.Msg}`);
            console.log(data.Msg);
          } else {
            toast.warning(`Is Not Aviable`);
          }
        } else {
          toast.warning(`${data.Msg}`);
        }
      })
      .catch((err) => {
        toast.warning(err?.toString());
      })
      .finally(() => {
        setIsLoading(false);
      });

    const errors = [];
    if (errors.length !== 0) {
      console.log(errors.join(", ") + " Are Required");
      alert(`${errors.join(", ")} Are Required`);
      return false;
    }
  };

  useEffect(() => {
    if (!mounted.current) {
      submitHandler(
        new Date(startDate)?.toDateString(),
        new Date(endDate)?.toDateString()
      );
      mounted.current = true;
      storeFilters({
        ...filters,
        arrivalDate: startDate,
        departureDate: endDate,
      });
    }
  }, [mounted]);

  

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
