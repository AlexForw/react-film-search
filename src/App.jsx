import { useEffect } from "react";
import './App.css'

const API = 'http://www.omdbapi.com?apikey=47daf436'

const movie = {
  "Title": "The Amazing Spiderman T4 Premiere Special",
  "Year": "2012",
  "imdbID": "tt2233044",
  "Type": "movie",
  "Poster": "N/A"
}

const App = () =>{

  const searchFilm = async (target) =>{
    const resp = await fetch(`${API}&s=${target}`)
    const data = await resp.json()
    return data.Search
  }

  useEffect(()=>{
    searchFilm('Spiderman')
  }, [])

  return (
    <div className="app">
      <h1>Badflix</h1>
      <div className="search">
        <input type="text" placeholder="Your favourite film.."/>
        <img src="icon" alt="search" />
      </div>


      <div className="container">
      <div>
            <p>{movie.Year}</p>
          </div>

          <div><img src={movie.Poster} alt={movie.Title} /></div>
          
          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
      </div>
    </div>
  );
}

export default App;
