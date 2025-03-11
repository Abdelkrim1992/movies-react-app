const MovieCard = ({movie}) => {

  const {id, title, vote_average, poster_path, release_date, original_language} = movie

  return (
    <div className="movie-card">
      <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'} alt="movies"/>
      <p className="text-white mt-5" key={id}>{title}</p>

      <div className="content">
        <div className="rating">
            <img src="./star.svg" alt="start"/>
            <p>{vote_average ? vote_average : "N/A"}</p>
        </div>
        <span >/</span>
        <p className="text-white lang">{original_language}</p>
        <span >/</span>
        <p className="year">{release_date ? release_date: "N/A"}</p>
      </div>

    </div>
  )
}

export default MovieCard;
