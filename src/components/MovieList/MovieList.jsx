import { useEffect, useState } from "react";

import _ from 'lodash';

import { filters, rating, shorting } from "../../constant";
import MovieCard from "./MovieCard";

// eslint-disable-next-line react/prop-types
const MovieList = ({type, title}) => {
    const [movies, setMovies] = useState([]);
    // filter
    const [filterMovies, setFilterMovies] = useState([]);

    // selected
    const [sort, setSort] = useState({
      by:"default",
      order:"asc"
    })


    const [minRat, setMinRat] = useState(0)
    // api
  useEffect(() => {
    fetchData();
  }, [type]);

  useEffect(()=>{
    if(sort.by !== "default"){
    const sortedMovies =_.orderBy(filterMovies, [sort.by], [sort.order]);
    setFilterMovies(sortedMovies)
    }
    
  }, [sort])

  const fetchData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=4ff1c917426e8163528fa8377c750ada`
    );
    const data = await response.json();
        setMovies(data.results)
        setFilterMovies(data.results)
  };

  console.log(minRat);
  const handleFilter = rate =>{
    if(rate === minRat) {
      setMinRat(0)
      setFilterMovies(movies)
    }else{
      setMinRat(rate)

      const filtered = movies.filter(movie => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  
  }

  const handleSort = e =>{
    const  {name, value} = e.target;
   setSort ( prev => ({...prev, [name]: value}) )
  }

  return (
    <section className="max-w-[1550px] mx-auto mt-11 mb-10 h-full py-5 " id={type}>
      <div className="flex  justify-between items-center">
        <h2 className="text-3xl text-gray-900 dark:text-gray-200">
        {title}{""}
        </h2>
        <div className="flex justify-center items-center gap-5 mt-5">
          <ul className="flex  items-center gap-3">
            {rating.map((item) => (
              <li key={item.id} className="text-xl font-semibold
               cursor-pointer text-black dark:text-gray-200" onClick={()=> handleFilter(item.rate)}>
                {item.value}
              </li>
            ))}
          </ul>
          <select name="by" id="" onChange={handleSort} value={sort.by}
           className="outline-none text-gray-950 rounded ">
            {shorting.map((item) => (
              <option value={item.content} key={item}>
                {" "}
                {item.value}{" "}
              </option>
            ))}
          </select>
          <select name="order" id="" onChange={handleSort} value={sort.order}
           className="outline-none text-gray-950 rounded">
            {filters.map((item) => (
              <option value={item.content} key={item.id}>
                {" "}
                {item.value}{" "}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly h-56 w-full">
        {
            filterMovies.map((movie) => (<MovieCard key={movie.id} movie={movie}/> ))
        }
      </div>
    </section>
  );
};

export default MovieList;
