import { filters, rating, shorting } from "../../constant"
import MovieCard from "./MovieCard"


const MovieList = () => {
  return (
    <section className="max-w-[1550px] mx-auto mt-11 mb-10 border-t">
        <div className="flex  justify-between items-center">
            <h2 className="text-3xl">
                Popular
            </h2>
            <div className="flex justify-center items-center gap-5 mt-5">
                <ul className="flex  items-center gap-3">
                    {
                        rating.map((item) => (
                            <li key={item} className="text-xl font-semibold">
                                {item.value}
                            </li>
                        ))
                    }
                </ul>
                <select name="" id="" className="outline-none text-gray-950 rounded">
                    {
                        shorting.map((item) =>(
                            <option value="" key={item}> {item.value} </option>
                        ))
                    }
                </select>
                <select name="" id="" className="outline-none text-gray-950 rounded">
                    {
                        filters.map((item) => (
                            <option value="" key={item}> {item.value} </option>
                        ))
                    }
                </select>
            </div>
        </div>
        <div className="flex flex-wrap justify-evenly">
            <MovieCard />
        </div>
    </section>
  )
}

export default MovieList