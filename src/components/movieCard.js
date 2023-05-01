import React from "react";
import { Link } from "react-router-dom";

const movieCard = ({ key, data }) => {
  return (
    <Link to={`/movie/${data.imdbID}`}>
      <div
        key={key}
        className="flex text-white flex-col bg-gray-800 w-[200px] justify-center items-center hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300"
      >
        <img src={data.Poster} className="h-[300px]" />
        <h1 className="font-semibold text-md text-white">{data.Title}</h1>
        <p>Year : {data.Year}</p>
      </div>
    </Link>
  );
};

export default movieCard;
