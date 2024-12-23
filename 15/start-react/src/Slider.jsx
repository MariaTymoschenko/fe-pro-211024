import React from "react";

function Slider(){
    return (
        <div>
        <div className="slider">
          <h2>POPULAR THIS WEEK</h2>
          <div className="navigation">
            <button>
              <i className="fa-solid fa-angle-left fa-2xl" style={{ color: "#a7a6a6" }}></i>
            </button>
            <button>
              <i className="fa-solid fa-angle-right fa-2xl" style={{ color: "#FFF" }}></i>
            </button>
          </div>
        </div>
        <div className="slider-item">
        <img src="imgs/br bad.png" alt=""/>
            <img src="imgs/rain.png" alt=""/>
            <img src="imgs/life in a year.png" alt=""/>
            <img src="imgs/money heist.png" alt=""/>
            <img src="imgs/squid game.png" alt=""/>
        </div>
        </div>
    );
}

export default Slider;