import star from "../../assets/star.png"

const MovieCard = () => {
  return (
    <a className="w-52 h-3/6 rounded shadow-sm m-4 overflow-hidden relative">
        <img src="https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg" 
        alt="movie" className="w-full h-full rounded"/>
        <div className="w-full h-full absolute p-3">
            <h3>Movie Name</h3>
            <div>
                <p>10-20-2022</p>
                <p>5.0 <img src={star} alt="rating" /></p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cum consectetur quo quidem vitae molestiae eligendi!
             </p>
        </div>
    </a>
  )
}

export default MovieCard