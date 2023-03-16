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

  const [totalPage, setTotalPage] = useState(1)
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(3)

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
    setIsLoading(true)
    getV2({url: GET_REVIEW(Id,500,page)})
    .then(data => {
      if(!data.IsError){
        setRoomreview(data.Data.data);
        setTotalPage(Math.ceil(data.Data.data.length/size))
        setPage(1)
        setIsLoading(false)
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
        setReview("")
        setClicked(false);
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

  const getReviewPageTorender = () => {
    const initialPage = [];
    const pageRange = 1; 

    initialPage.push(
      <div
        key={1}
        className={page === 1 ? "actives" : undefined}
        onClick={() => setPage(1)}
      >
        <div className="single-pagination">{1}</div>
      </div>
    );
  
    if (page - pageRange > 2) {
      initialPage.push(
        <div key="ellipsis-before" className="ellipsis">
          <div className="single-pagination">...</div>
        </div>
      );
    }
  
    for (let i = Math.max(2, page - pageRange); i <= Math.min(totalPage - 1, page + pageRange); i++) {
      initialPage.push(
        <div
          key={i}
          className={page === i ? "actives" : undefined}
          onClick={() => setPage(i)}
        >
          <div className="single-pagination">{i}</div>
        </div>
      );
    }
  
    if (page + pageRange < totalPage - 1) {
      initialPage.push(
        <div key="ellipsis-after" className="ellipsis">
          <div className="single-pagination">...</div>
        </div>
      );
    }
  
    if (totalPage > 1) {
      initialPage.push(
        <div
          key={totalPage}
          className={page === totalPage ? "actives" : undefined}
          onClick={() => setPage(totalPage)}
        >
          <div className="single-pagination">{totalPage}</div>
        </div>
      );
    }
    return initialPage;
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
      {
        roomreview
        .slice((page-1) * size, page * size)
        .map((reviews, index) =>  <ReviewTemplate reviews={reviews} handleDelete={handleDelete} key={index} />)
      }
    {isLoading && <Suspense />}
    </div>
    <div className='paginator-parent'>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>Pre</button>
      {getReviewPageTorender()}
      <button disabled={page === totalPage} onClick={() => setPage(page + 1)}>Next</button> 
      </div>
    </>
  );
};

export default Review;

