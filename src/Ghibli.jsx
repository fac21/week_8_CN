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
      <h1>{movieData.title}</h1>
      <h2>{movieData.original_title}</h2>
      <h2>{movieData.rt_score}</h2>
      <h3>{movieData.release_date}</h3>
      <h3>{movieData.running_time}</h3>
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
      <h1>{movieData.title}</h1>
      <h2>{movieData.original_title}</h2>
      <h2>{movieData.rt_score}</h2>
      <h3>{movieData.release_date}</h3>
      <h3>{movieData.running_time}</h3>
    </div>
  );
}


export { FetchChosenMovie, RandomMovie }