import { Route, Routes } from 'react-router-dom';

import DarkBtn from "./components/MovieList/DarkBtn";
import MovieList from "./components/MovieList/MovieList";
import SingleMovie from './components/MovieList/SingleMovie';
import Navbar from "./components/Navbar/Navbar";

const moviesList = [
  {value:"popular", title:"Popular", path:"/"},
  {value:"top_rated", title:"Top Rated", path:"/top_rated"},
  {value:"upcoming", title:"Upcoming", path:"/upcoming"}
]


const App = () => {
  return (
    <div className=" max-container dark:bg-gray-950">
      <div className="grid grid-row-1 text-gray-300">
        <Navbar />
        <DarkBtn />
        {/* <MovieList type="popular" title="Popular"/>
        <MovieList type="top_rated" title="Top Rated"/>
        <MovieList type="upcoming" title="Upcoming"/> */}
        <main className="grid">
        <Routes>
        {
          moviesList.map((movie) => (
            <Route key={movie} path={movie.path} 
            element={<MovieList type={movie.value} title={movie.title}  />} />
          ))
        }
        <Route path='/movie/:movieId' element={<SingleMovie />}/>
        </Routes>
        </main>
    </div>
    </div>
  )
}

export default App