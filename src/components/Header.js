import React, { useState } from "react";
import logo from "../images/imdblogo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };

  return (
    <section
      id="header"
      className="flex justify-between px-10 items-center bg-[#0e0e0e] h-[80px] w-full"
    >
      <Link to="/">
        <img src={logo} className="h-[50px] w-[60px]" />
      </Link>
      <div className="flex items-center justify-between">
        <form onSubmit={handleForm} className="flex gap-10 items-center">
          <input
            type="text"
            className="w-[400px] h-[35px] rounded px-3"
            placeholder="Enter names of movies or shows"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
          <div className="flex items-center">
            <button
              type="submit"
              className="rounded bg-black text-white h-[40px] w-[80px]"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <h2 className="font-semibold text-2xl text-white">Movie App</h2>
    </section>
  );
};

export default Header;
