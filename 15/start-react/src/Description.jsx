import React from "react";

function Description(){
    return (
        <div>
            <h1>Stranger Things</h1>
        <div className="desc-flex">
          <div>2019</div>
          <div>
            <b className="white-text">DIRECTOR:</b>
            <b className="gray-text"> Shawn Levy</b>
          </div>
          <div>
            <b className="white-text">Seasons:</b>
            <b className="gray-text"> 3 (5 Episodes)</b>
          </div>
        </div>
        <div className="description">
          <p>
            In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
          </p>
        </div></div>
    );
}

export default Description;