import React from 'react';

function FetchChosenMovie(props) {
  const [movieData, setMovieData] = React.useState('');

  React.useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((movieList) => movieList.json())
      .then((movieList) => {
        setMovieData(movieList);
        const filteredMovie = movieList.filter((item) => {
          if(item.title === props.chosenMovie) {
            return props.chosenMovie;
          }
        })
        setMovieData(filteredMovie[0]);
      });
  }, [props.chosenMovie]);

  if (!movieData) return <div>Loading...</div>;
  return (
    <div>
      <h2>{movieData.title}</h2>
      <h3>{movieData.original_title}</h3>
      <h4>Rotten Tomato Rating:</h4> 
      <h3 className='rt'>{movieData.rt_score}</h3>
      <h4>Released: {movieData.release_date}</h4>
      <h4>Running Time: {movieData.running_time}</h4>
  </div>
  );
}


function RandomMovie() {
  const [movieData, setMovieData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((movieList) => movieList.json())
      .then((movieList) => {
        console.log(movieList)
        setMovieData(movieList)
        //Select a random movie from the array
        const randItemNo = Math.floor(Math.random()*movieList.length);
        const movieData = movieList[randItemNo];
        setMovieData(movieData);
      });
  }, []);

  if (!movieData) return <div>Loading...</div>;
  return (
    <div>
      <h2>{movieData.title}</h2>
      <h3>{movieData.original_title}</h3>
      <h4>Rotten Tomato Rating:</h4> 
      <h3 className='rt'>{movieData.rt_score}</h3>
      <h4>Released: {movieData.release_date}</h4>
      <h4>Running Time: {movieData.running_time}</h4>
    </div>
  );
}


export { FetchChosenMovie, RandomMovie }