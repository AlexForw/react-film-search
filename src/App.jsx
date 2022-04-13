import { useEffect } from "react";


const API = 'http://www.omdbapi.com?apikey=47daf436'

const App = () =>{

  const searchFilm = async (target) =>{
    const resp = await fetch(`${API}&s=${target}`)
    const data = await resp.json()
  }

  useEffect(()=>{
    searchFilm('AnyFilm')
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
