import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Router, Routes, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
