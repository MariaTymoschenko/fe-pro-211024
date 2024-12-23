import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Genres from './Genres.jsx'
import Description from './Description.jsx'
import Rating from './Rating.jsx'
import Buttons from './Buttons.jsx'
import AgeCategory from './AgeCategory.jsx'
import Slider from './Slider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Genres/>
      <Description/>
        <Rating/>
        <Buttons/>
        <AgeCategory/>
        <Slider/>
    </>
  )
}

export default App
