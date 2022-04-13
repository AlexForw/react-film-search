import { useEffect, useState } from "react";
import './App.css'
import FilmCard from "./FilmCard";


const API = 'http://www.omdbapi.com?apikey=47daf436'


const App = () =>{
  const [film, setFilm] = useState([])
  const [search, setSearch] = useState('')

  const searchFilm = async (target) =>{
    const resp = await fetch(`${API}&s=${target}`)
    const data = await resp.json()
    setFilm(data.Search)
  }

  useEffect(()=>{
    searchFilm('Spiderman')
  }, [])

  return (
    <div className="app">
      <h1>Badflix</h1>
      <div className="search">
        <input type="text" placeholder="Your favourite film.." value={search} onChange={(elem)=>setSearch(elem.target.value)}/>
        <img src="icon" alt="search" onClick={()=> searchFilm(search)}/>
      </div>

      {
        film.length > 0 ?(
      <div className="container">
        {film.map(elem =><FilmCard props={elem}/>)}
      </div>
        ) : (
          <div className="empty"><h2>No way man</h2></div>
        )
      }
    </div>
  );
}

export default App;
