import React, { useState } from 'react'
import pixel from './pixel.png'
import './App.css'
import FetchMovie from './Ghibli.jsx'

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
            <select name="movies" id="movies">
              <option value="Arrietty">Arrietty</option>
              <option value="Castle in the Sky">Castle in the Sky</option>
              <option value="From Up on Poppy Hill">From Up on Poppy Hill</option>
              <option value="Grave of the Fireflies">Grave of the Fireflies</option>
              <option value="Howl's Moving Castle">Howl's Moving Castle</option>
              <option value="Kiki's Delivery Service">Kiki's Delivery Service</option>
              <option value="My Neighbors the Yamadas">My Neighbors the Yamadas</option>
              <option value="My Neighbor Totoro">My Neighbor Totoro</option>
              <option value="Only Yesterday">Only Yesterday</option>
              <option value="Pom Poko">Pom Poko</option>
              <option value="Porco Rosso">Porco Rosso</option>
              <option value="Ponyo">Ponyo</option>
              <option value="Princess Mononoke">Princess Mononoke</option>
              <option value="Spirited Away">Spirited Away</option>
              <option value="Tales from Earthsea">Tales from Earthsea</option>
              <option value="The Cat Returns">The Cat Returns</option>
              <option value="The Red Turtle">The Red Turtle</option>
              <option value="The Tale of the Princess Kaguya">The Tale of the Princess Kaguya</option>
              <option value="The Wind Rises">The Wind Rises</option>
              <option value="When Marnie Was There">When Marnie Was There</option>
              <option value="Whisper of the Heart">Whisper of the Heart</option>
            </select>
          </label>
          <button type='submit'>Go!</button>
        </form>
        {chosenMovie ? 
          <div className='flex-movies'>
            <FetchMovie chosenMovie={chosenMovie}/>
          </div>
          : null}
      </header>
    </div>
  )
}

export default App
