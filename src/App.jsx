import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {RandomMovie, FetchChosenMovie} from './Ghibli.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [chosenMovie, setChosenMovie] = useState("")

  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={
            (event) => {
              event.preventDefault();
              setChosenMovie(event.target.movies.value);
            }
          }>
        <label htmlFor="cars">Choose a movie:
          <select 
          name="movies" 
          id="movies" 
          >
            <option value="Kiki's Delivery Service">Kiki's Delivery Service</option>
            <option value="My Neighbor Totoro">My Neighbor Totoro</option>
            <option value="Only Yesterday">Only Yesterday</option>
            <option value="Grave of the Fireflies">Grave of the Fireflies</option>
          </select>
        </label>
        <button type='submit'>Submit</button>
      </form>
      {chosenMovie? 
        <>
        <FetchChosenMovie chosenMovie={chosenMovie}/>
        <RandomMovie /> 
        </>
        : null}
        
      </header>
    </div>
  )
}

export default App
