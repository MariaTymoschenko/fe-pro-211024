import React, {useRef} from "react";

function Rating(){
    const starsRef = useRef([]);
  
    const handleRatingClick = (index) => {
      starsRef.current.forEach((star, i) => {
        if (star) {
          star.className =
            i <= index ? "fa-solid fa-star fa-xl" : "fa-regular fa-star fa-xl";
        }
      });
    };
  

    return (
        <div className="rating">
          {[...Array(5)].map((_, index) => (
        <i
          key={index}
          ref={(el) => (starsRef.current[index] = el)}
          className={ "fa-regular fa-star fa-xl"}
           style={{ cursor: "pointer" }}
          onClick={() => handleRatingClick(index)}
        ></i>
      ))}
    </div>
  );
}

export default Rating;