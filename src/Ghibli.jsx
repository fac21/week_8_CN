import React from 'react';
import popcorn from './popcorn.png'

function FetchMovie(props) {
  const [movieA, setMovieA] = React.useState(); //movies are objects
  const [movieB, setMovieB] = React.useState();
  const [score, setScore] = React.useState(0);
  const [lastScore, setLastScore] = React.useState(0);

  React.useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((movieList) => movieList.json())
      .then((movieList) => {

        //Find the to be movieA
        const filteredMovieArr = movieList.filter((item) => {
          if(item.title === props.chosenMovie) {
            return props.chosenMovie;
          }
        })
        const chosenMovie = (filteredMovieArr[0]) //this variable is updated and available straight away
        setMovieA(chosenMovie); // SetMovieA doesnt take effect until we have returned out of the component. Therefore is we conole logged it, it would show the last movie details, or undefined it the first time user plays.

        //Find the const movieB 
        const randItemNo = Math.floor(Math.random()*movieList.length);
        const randomMovie = movieList[randItemNo];
        setMovieB(randomMovie);

        if(parseInt(chosenMovie.rt_score) > parseInt(randomMovie.rt_score)) {
          console.log('win')
          setScore(score+1)
        }
        else {
          console.log('defeat')
          setLastScore(score);
          setScore(0);

        }
      })
  }, [props.chosenMovie]); //gets called everytime chosenMovie changes

  //Need check whether this works beyond first time a new film is selected and rendered
  if (!movieA || !movieB) return <div>Loading...</div>;
  //If line above does not run, then statement below will return instead
  return (
    <div>
      <div className='flex-movies'>
        <div>
        <h2>{movieA.title}</h2>
        <h3>{movieA.original_title}</h3>
        <h4>Rotten Tomato Rating:</h4> 
        <h3 className='rt'>{movieA.rt_score}</h3>
        <h4>Released: {movieA.release_date}</h4>
        <h4>Running Time: {movieA.running_time}</h4>
        </div>
        <div>
          <h2>{movieB.title}</h2>
          <h3>{movieB.original_title}</h3>
          <h4>Rotten Tomato Rating:</h4> 
          <h3 className='rt'>{movieB.rt_score}</h3>
          <h4>Released: {movieB.release_date}</h4>
          <h4>Running Time: {movieB.running_time}</h4>
        </div>
        <br></br>
      </div>
      <img src={popcorn} height='65'/> 
      <p>Consecutive Popcorn Points</p>
      {score === 0? <p className='rt'>Game Over!! You scored {lastScore} point(s)</p> : <p className='rt'>{score}</p>}
    </div>
  );
}

export default FetchMovie