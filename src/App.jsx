import MovieList from "./components/MovieList/MovieList"
import Navbar from "./components/Navbar/Navbar"


const App = () => {
  return (
    <div className="grid grid-row-[80px auto] text-gray-300">
      <Navbar />

      <main className=" font-palanquin">
        <MovieList />
      </main>
    </div>
  )
}

export default App