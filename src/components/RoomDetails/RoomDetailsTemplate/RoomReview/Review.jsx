import React from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { GET_DELETE_REVIEW, GET_REVIEW, POST_REVIEW, POST_UPDATE_REVIEW } from "../../../../lib/endpoints";
import { getV2, postV2 } from "../../../../services/http-service-v2";
import Suspense from "../../../Sheared/Suspense/Suspense";
import ReviewTemplate from "./ReviewTemplate";

const Review = ({room}) => {
  const {Id} = room;
  //email
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [roomreview, setRoomreview] = useState([])
  const mounted = useRef(false)

  //email state
  const [review, setReview] = useState("");
  const [reviewIsTouched, setReviewIsTouched] = useState(false);
  const [reviewIsValid, setReviewIsValid] = useState(false);

  //email functions
  const reviewOnChangeHandeler = ({ target }) => {
    setReview(target.value);
  };
  const reviewTouchedHandeler = () => {
    setReviewIsTouched(true);
  };

  useEffect(() => {
    if (clicked) {
      if (
        (reviewIsTouched && review.length === 0) ||
        (!reviewIsTouched && review.length === 0)
      ) {
        setReviewIsValid(true);
      }
    } else setReviewIsValid(false);
  }, [review.length, reviewIsTouched, clicked]);



  const getRoomReview = useCallback(() => {
    getV2({url: GET_REVIEW(Id,5,1)})
    .then(data => {
      if(!data.IsError){
        setRoomreview(data.Data.data);
      } else {
       alert('Error')
      }
      
    }).catch(error => {
     
    });
  }, []);

  useEffect(() => {
    if (!mounted.current) {
      getRoomReview();
      mounted.current = true;
  }
}, [mounted]);


  const sendOnClickedHandler = (evt) => {
    setClicked(true);
    setIsLoading(true)
    evt.preventDefault();
    const payload = {
      HouseId: Id,
      Text: review,
    }

    postV2({url: POST_REVIEW, payload})
    .then(data => {
      if(data.IsError){
        toast.warning(data.Msg);
      } else { 
        getRoomReview();
      }
    }).catch(err => {
      toast.warning(err?.toString());
    }).finally(() => {
      setIsLoading(false)
    })
    console.log(review)
  };


  const handleDelete = (Id) => {
    getV2({url: GET_DELETE_REVIEW(Id)})
    .then(data => {
      if(!data.IsError){
        getRoomReview();
      } else {
       alert('Error')
      }
    }).catch(error => {
     
    });
  }


  return (
    <>
    <div id="Tab5" className="tabcontent">
      <div className="room-detaits-main">
        <div className="ex-customar">
          <form>
            <div className="custom-input-resort">
              <label htmlFor="ename">Your Review </label>
              <input
                type="text"
                name=""
                id="ename"
                placeholder="Write Review...."
                value={review} 
                onChange={reviewOnChangeHandeler} 
                onBlur={reviewTouchedHandeler}
              />
            </div>
            {reviewIsValid && (
              <div className="alert alert-error">Is required.</div>
           )}
            {reviewIsValid && review.length === 0 && !reviewIsValid && (
              <div className="alert alert-error">Is required.</div>
            )}
            <div className="book_table_item dtl-btn">
              <button onClick={sendOnClickedHandler} type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="review-single-parent">
      {
        roomreview.map((reviews, index) =>  <ReviewTemplate reviews={reviews} handleDelete={handleDelete} key={index} />)
      }
   
    {isLoading && <Suspense />}
    </div>
    </>
  );
};

export default Review;

