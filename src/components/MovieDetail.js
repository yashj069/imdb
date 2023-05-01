import React, { useEffect } from "react";
import {
  fetchAsyncMovieOrShowDetail,
  getAllDetails,
  removeMovie,
} from "../features/movies/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAllDetails);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeMovie());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="flex w-full px-10 text-white justify-between bg-[#1a1a1c] py-8">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="flex flex-col w-[70%] justify-between">
            <div className="text-2xl">{data.Title}</div>
            <div className="flex gap-4 text-blue-400">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {data.Year}
              </span>
            </div>
            <div className="">{data.Plot}</div>
            <div className="flex flex-col">
              <div className="flex gap-4">
                <span className="w-[100px]">Director</span>
                <span className="text-blue-400">{data.Director}</span>
              </div>
              <div className="flex gap-4">
                <span className="w-[100px]">Stars</span>
                <span className="text-blue-400">{data.Actors}</span>
              </div>
              <div className="flex gap-4">
                <span className="w-[100px]">Generes</span>
                <span className="text-blue-400">{data.Genre}</span>
              </div>
              <div className="flex gap-4">
                <span className="w-[100px]"> Languages</span>
                <span className="text-blue-400">{data.Language}</span>
              </div>
              <div className="flex gap-4">
                <span className="w-[100px]">Awards</span>
                <span className="text-blue-400">{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className=" flex ">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
