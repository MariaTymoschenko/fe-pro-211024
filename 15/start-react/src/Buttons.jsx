import React from "react";

function Buttons(){
    return (
        <section className="buttons">
        <button className="stream">
          STREAM NOW <i className="fa-solid fa-circle-play"></i>
        </button>
        <button className="episodes">ALL EPISODES</button>
      </section>
    );
}

export default Buttons;