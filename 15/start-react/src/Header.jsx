import React from "react";

function Header(){
    return (
      <header className="top-header">
      <div className="top-logo-bar">
        <img className="netflix-logo" src="imgs/netflix-logo-png-2562 1.png" alt=""/>
        <span className="spacer"></span>
        <span className="date">Friday July 8th</span>
      </div>
      <div className="right-top-menu">
        <i className="fa-solid fa-magnifying-glass fa-2xl" style={{ color: "#FFF" }}></i>
        <img className="profile" src="imgs/profile pic.png" alt="" />
      </div>
    </header>
    );
}

export default Header;