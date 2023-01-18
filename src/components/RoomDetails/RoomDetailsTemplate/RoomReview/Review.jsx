import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { POST_REVIEW } from "../../../../lib/endpoints";
import { postV2 } from "../../../../services/http-service-v2";
import Suspense from "../../../Sheared/Suspense/Suspense";
import ReviewTemplate from "./ReviewTemplate";

const Review = ({room}) => {
  const {Id} = room;
  console.log(Id);
  //email
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

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


  const sendOnClickedHandler = (evt) => {
    setClicked(true);
    setIsLoading(true)
    evt.preventDefault();
    const payload = {
      placeId: Id,
      Text: review,
    }

    postV2({url: POST_REVIEW, payload})
    .then(data => {
      if(data.IsError){
        toast.warning(data.Msg);
      } else { 
        toast.success("Message Sent");
      }
    }).catch(err => {
      toast.warning(err?.toString());
    }).finally(() => {
      // Loader Close
      setIsLoading(false)
    })
    console.log(review)
  };

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
    <ReviewTemplate />
    {isLoading && <Suspense />}
    </div>
    </>
  );
};

export default Review;
