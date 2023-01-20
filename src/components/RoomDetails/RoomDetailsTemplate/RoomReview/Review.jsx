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
  console.log(roomreview);

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

  // const handleUpdate = (id, updatedText) => {
  //   const payload = {
  //     Text: updatedText
  //   }
  //   postV2({url: POST_UPDATE_REVIEW(id), payload})
  //     .then(data => {
  //       if(!data.IsError){
  //         getRoomReview();
  //         toast.success("Review updated successfully");
  //       } else { 
  //         toast.warning(data.Msg);
  //       }
  //     }).catch(err => {
  //       toast.warning(err?.toString());
  //     });
  // }
  

  

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
        roomreview.map(reviews =>  <ReviewTemplate reviews={reviews} handleDelete={handleDelete} handleUpdate={handleUpdate} key={Id} />)
      }
   
    {isLoading && <Suspense />}
    </div>
    </>
  );
};

export default Review;



// const Review = ({room}) => {
//   const {Id} = room;
//   const [roomreview, setRoomreview] = useState([]);
//   const [review, setReview] = useState("");
//   const [reviewId, setReviewId] = useState(null); // added this state to keep track of the review ID that is being updated
//   const [isUpdating, setIsUpdating] = useState(false); // added this state to show a loading spinner when updating a review
  
//   useEffect(() => {
//     getRoomReview();
//   }, []);

//   const getRoomReview = () => {
//     getV2({url: GET_REVIEW(Id, 5, 1)})
//     .then(data => {
//       if (!data.IsError) {
//         setRoomreview(data.Data.data);
//       } else {
//         alert('Error');
//       }
//     }).catch(error => {
//       console.log(error);
//     });
//   }

//   const handleEdit = (reviewId, reviewText) => {
//     setReviewId(reviewId); // set the review ID that is being updated
//     setReview(reviewText); // set the review text in the input field
//   }

//   const handleUpdate = (evt) => {
//     evt.preventDefault();
//     setIsUpdating(true); // show the loading spinner
//     const payload = {
//       ReviewId: reviewId,
//       Text: review,
//     }

//     postV2({url: POST_UPDATE_REVIEW, payload})
//     .then(data => {
//       if (data.IsError) {
//         toast.warning(data.Msg);
//       } else { 
//         getRoomReview(); // refresh the room reviews
//         setReviewId(null); // reset the review ID
//         setReview(''); // reset the review text
//         toast.success('Review updated successfully');
//       }
//     }).catch(err => {
//       toast.warning(err?.toString());
//     }).finally(() => {
//       setIsUpdating(false); // hide the loading spinner
//     });
//   }

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//         />
//         {isUpdating ? <div>Loading...</div> : <button onClick={handleUpdate}>Update Review</button>}
//       </form>
//       {roomreview.map((review) => (
//         <div key={review.Id}>
//           <p>{review.Text}</p>
//           <button onClick={() => handleEdit(review.Id, review.Text)}>Edit</button>
//         </div>
//       ))}
//     </div>
//   )
// }
