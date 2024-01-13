import { useParams } from "react-router-dom";

const SingleMovie = () => {
    const {movieId} = useParams()
  return (
    <div className="text-center my-28 text-3xl">
        Single Movie {movieId} 
    </div>
  )
}

export default SingleMovie