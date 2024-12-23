import React from "react";

function Rating(){
    return (
        <div className="rating">
          <i className="fa-solid fa-star fa-xl"></i>
          <i className="fa-solid fa-star fa-xl"></i>
          <i className="fa-solid fa-star fa-xl"></i>
          <i className="fa-regular fa-star fa-xl" style={{ color: "#FFF" }}></i>
          <i className="fa-regular fa-star fa-xl" style={{ color: "#FFF" }}></i>
        </div>
    );
}

export default Rating;