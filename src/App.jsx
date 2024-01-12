import DarkBtn from "./components/MovieList/DarkBtn";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";

const moviesList = [
  {value:"popular", title:"Popular"},
  {value:"top_rated", title:"Top Rated"},
  {value:"upcoming", title:"Upcoming"}
]


const App = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="grid grid-row-1 text-gray-300">
        <Navbar />
        <DarkBtn />
        {/* <MovieList type="popular" title="Popular"/>
        <MovieList type="top_rated" title="Top Rated"/>
        <MovieList type="upcoming" title="Upcoming"/> */}
        <main className="grid">
        <div className="py-1">
        {
          moviesList.map((movie) => (
            <MovieList type={movie.value} title={movie.title} key={movie} />
          ))
        }
        </div>
        </main>
    </div>
    </div>
  )
}

export default App