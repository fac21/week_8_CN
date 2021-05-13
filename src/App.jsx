import React, { useState } from 'react'
import popcorn from './popcorn2.png'
import './App.css'
import {RandomMovie, FetchChosenMovie} from './Ghibli.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [chosenMovie, setChosenMovie] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <h1><a href='/'>Game on Ghibli!</a></h1>
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
              <option value="Grave of the Fireflies">Porco Rosso</option>
              <option value="Grave of the Fireflies">Pom Poko</option>
              <option value="Grave of the Fireflies">Whisper of the Heart</option>
              <option value="Grave of the Fireflies">The Wind Rises</option>
            </select>
          </label>
          <button type='submit'>Submit</button>
        </form>
        {chosenMovie? 
          <div class='flex-movies'>
          <FetchChosenMovie chosenMovie={chosenMovie}/>
          <RandomMovie /> 
          </div>
          : null}
        <br></br>
        <p>Popcorn Points</p> <img src={popcorn} height='65'/>
      </header>
    </div>
  )
}

export default App
