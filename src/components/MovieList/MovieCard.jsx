/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import star from "../../assets/star.png";

const MovieCard = ({movie}) => {
  return (
    <Link className="w-52 h-full rounded shadow-sm m-4 
    overflow-hidden relative cursor-pointer
     hover:scale-105 transition-all" to={`/movie/${movie.id}`} target="_blank" rel="noreferrer">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt="movie"
        className="w-full h-full rounded"
      />
      <div className="w-full h-full absolute p-3 top-0 flex flex-col justify-end
        bg-gradient-to-t from-slate-950 scale-105 opacity-0 hover:opacity-100 transition-all">
        <h3 className="text-xl text-orange-500 text-center font-semibold pb-1">
         {movie.original_title}
        </h3>
        <div className="flex justify-evenly items-center text-orange-500">
          <p className="text-xl">{movie.release_date}</p>
          <p className="flex items-center text-xl leading-3">
            {movie.vote_average}
            <img src={star} alt="rating" className=" w-4 h-4 " />
          </p>
        </div>
        <p className="text-sm py-2 text-center italic font-medium">
          {movie.overview.slice(0, 100)+ "..."}
        </p>
      </div>
    </Link>
    // <div className="w-52 h-full rounded bg-white m-4 overflow-hidden
    //  relative cursor-pointer hover:scale-105 transition-all">
    //   <div className="">
    //   <a href={`https://www.themoviedb.org/movie/${movie.id}`}
    //    target="_blank" rel="noreferrer">
    //     hello
    //   </a>
    //   </div>
    // </div>
  );
};

export default MovieCard;
