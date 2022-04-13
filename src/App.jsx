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
        <input type="text" onKeyPress={elem => elem.key === 'Enter' && searchFilm(search)} placeholder="Your favourite film.." value={search} onChange={(elem)=>setSearch(elem.target.value)}/>
        <button onClick={()=> searchFilm(search)} className="search-button"></button>
      </div>

      {
        film?.length > 0 ?(
      <div className="container">
        {film.map((elem,i) =><FilmCard key={elem + i} props={elem}/>)}
      </div>
        ) : (
          <div className="empty"><h2>No way man</h2></div>
        )
      }
    </div>
  );
}

export default App;
