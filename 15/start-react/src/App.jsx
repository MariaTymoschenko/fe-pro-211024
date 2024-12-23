import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
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
      <main>
        <h2>
          <span className="border">Drama</span>
          <span className="border">Thriller</span>
          Supernatural
        </h2>
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
        </div>
        <div className="rating">
          <i className="fa-solid fa-star fa-xl"></i>
          <i className="fa-solid fa-star fa-xl"></i>
          <i className="fa-solid fa-star fa-xl"></i>
          <i className="fa-regular fa-star fa-xl" style={{ color: "#FFF" }}></i>
          <i className="fa-regular fa-star fa-xl" style={{ color: "#FFF" }}></i>
        </div>
        <section className="buttons">
          <button className="stream">
            STREAM NOW <i className="fa-solid fa-circle-play"></i>
          </button>
          <button className="episodes">ALL EPISODES</button>
        </section>
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
        <div className="age-category">16+</div>
        <div className="slider-item">
        <img src="imgs/br bad.png" alt=""/>
            <img src="imgs/rain.png" alt=""/>
            <img src="imgs/life in a year.png" alt=""/>
            <img src="imgs/money heist.png" alt=""/>
            <img src="imgs/squid game.png" alt=""/>
        </div>
      </main>
    </>
  )
}

export default App
