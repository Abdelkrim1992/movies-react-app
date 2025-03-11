import { useEffect, useState } from "react";
import Loading from "./Loading";
import MovieCard from "./MovieCard";


const TopMovies = ({movies, isLoading, errorMessage}) => {

  return (
    <section className="all-movies">
        <h2 className="mt-10">All Movies</h2>
        
        {isLoading ? (
            <Loading />
           ):
           errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
           ) : (
            <ul>
                {movies.map((moviesList)=>(
                    <MovieCard key={moviesList.id} movie={moviesList}/>
                ))}
            </ul>
           )
        }
    </section>
  )
}

export default TopMovies
