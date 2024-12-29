import React, {useState} from "react";

function Header(){
  const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
        if (isSearchVisible) {
            setSearchInput("");
        }
    };

    return (
      <header className="top-header">
      <div className="top-logo-bar">
        <img className="netflix-logo" src="imgs/netflix-logo-png-2562 1.png" alt=""/>
        <span className="spacer"></span>
        <span className="date">Friday July 8th</span>
      </div>
      <div className="right-top-menu">
      {!isSearchVisible ? (
                    <i
                        className="fa-solid fa-magnifying-glass fa-2xl"
                        style={{ color: "#FFF", cursor: "pointer" }}
                        onClick={toggleSearch}
                    ></i>
                ) : (
                  <div className="search-container" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '-120px' }}>
                    <i
                            className="fa-solid fa-xmark fa-2xl"
                            style={{ cursor: "pointer", padding: '8px' }}
                            onClick={toggleSearch}
                        ></i>
                  <input
                      type="text"
                      className="search-input"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      placeholder="Search..."
                      style={{
                          padding: '8px 12px',
                          fontSize: '16px',
                          border: '1px solid',
                          borderRadius: '4px',
                          flex: '1'
                      }}
                  />
                    </div>
                )}
          {!isSearchVisible && (
                    <img className="profile" src="imgs/profile pic.png" alt="" />
                )}
      </div>
    </header>
    );
}

export default Header;