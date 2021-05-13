import React from 'react';

function FetchChosenMovie(props) {
  const [movieData, setMovieData] = React.useState('');

  React.useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((movieList) => movieList.json())
      .then((movieList) => {
        console.log(movieList);
        setMovieData(movieList);
        movieList.filter((item) => {
          if(item.title === props.chosenMovie) {
            console.log(props.chosenMovie);
          }
        })
        // function shortList(movieName, movieList){
        //   for(let i=0; i<movieList.length; i++) {
        //     movieList[i].title === 
        //   }
        // }
        //Select a random movie from the array
        // const randItemNo = Math.floor(Math.random()*movieList.length);
        // console.log(randItemNo);
        // console.log(movieList[randItemNo]);
        // const movieData = movieList[randItemNo];
        // setMovieData(movieData);
      });
  }, [props.chosenMovie]);

  if (!movieData) return <div>Loading...</div>;
  return (
    <div>
      <h1>{movieData.title}</h1>
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
        console.log(randItemNo);
        console.log(movieList[randItemNo]);
        const movieData = movieList[randItemNo];
        setMovieData(movieData);
      });
  }, []);

  if (!movieData) return <div>Loading...</div>;
  return (
    <div>
      <h1>{movieData.title}</h1>
    </div>
  );
}


export { FetchChosenMovie, RandomMovie }