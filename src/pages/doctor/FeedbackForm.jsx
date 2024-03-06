import React, { useState } from "react";
import {AiFillStar} from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const handleSubmitReview=async(e)=>{
    e.preventDefault()
  }
  return (
    <form action="">
      <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
        How would you rate the over experience
      </h3>
      <div className="">
        {[...Array(5).keys()].map((_, index) => {
          index += 1;
          return (
            <button
              className={`${
                index <= (rating && hover) || hover
                  ? "text-yellowColor"
                  : "text-gray-400"
              } bg-transparent border-none outline-none text-[400] cursor-pointer`}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={setHover(rating)}
              onClick={() => setRating(index)}
              onDoubleClick={() => {
                setHover(0);
                setRating(0);
              }}
              key={index}
              type="button"
            >
              <span>
                <AiFillStar />
              </span>
            </button>
          );
        })}
      </div>
      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          Share your feedback or suggestions*
        </h3>
        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
          placeholder="Write your message"
          onChange={(e) => setReviewText(e.target.value)}
          rows="5"
        ></textarea>
      </div>
      <button type="submit" onClick={handleSubmitReview} className="btn">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;