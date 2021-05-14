import React, { useState } from 'react'
import popcorn from './popcorn.png'
import pixel from './pixel.png'
import './App.css'
import {RandomMovie, FetchChosenMovie} from './Ghibli.jsx'

function App() {
  const [chosenMovie, setChosenMovie] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <h1><a href='/'>Game on Ghibli!</a><img src={pixel} height='140'/></h1>
        <form onSubmit={
              (event) => {
                event.preventDefault();
                setChosenMovie(event.target.movies.value);
              }
            }>
          <label htmlFor="cars"><p>Choose a movie:</p>
            <select 
            name="movies" 
            id="movies" 
            >
              <option value="Kiki's Delivery Service">Kiki's Delivery Service</option>
              <option value="My Neighbor Totoro">My Neighbor Totoro</option>
              <option value="Only Yesterday">Only Yesterday</option>
              <option value="Grave of the Fireflies">Grave of the Fireflies</option>
              <option value="Porco Rosso">Porco Rosso</option>
              <option value="Pom Poko">Pom Poko</option>
              <option value="Whisper of the Heart">Whisper of the Heart</option>
              <option value="The Wind Rises">The Wind Rises</option>
            </select>
          </label>
          <button type='submit'>Go!</button>
        </form>
        {chosenMovie ? 
          <div class='flex-movies'>
            <FetchChosenMovie chosenMovie={chosenMovie}/>
            <RandomMovie /> 
          </div>
          : null}
        <br></br>
        <p>Popcorn Points</p><img src={popcorn} height='65'/>
      </header>
    </div>
  )
}

export default App
