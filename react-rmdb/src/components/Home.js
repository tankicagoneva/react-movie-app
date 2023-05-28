import React from "react";
import { useState, useEffect } from "react";

import {
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  API_KEY,
  API_URL,
} from "../config";

// import Header from "./elements/Header";
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";

// custom Hook
import { useHomeFetch } from "./hooks/useHomeFetch";

// import components
const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  console.log(state);
  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      />{" "}
      <SearchBar />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </>
  );
};

export default Home;
