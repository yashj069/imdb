import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../features/movies/movieSlice";
import MovieCard from "./movieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div>No movies found</div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div>{shows.Error}</div>
    );

  return (
    <div>
      <div className="flex flex-col text-center items-center ">
        <h1 className="text-4xl font-semibold text-blue-400">Movies</h1>
        <div className="flex flex-wrap justify-center gap-5 p-10">
          {renderMovies}
        </div>
      </div>
      <div className="flex flex-col text-center items-center ">
        <h1 className="text-4xl font-semibold text-blue-400">Shows</h1>
        <div className="flex flex-wrap justify-center gap-5 p-10">
          {renderShows}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
