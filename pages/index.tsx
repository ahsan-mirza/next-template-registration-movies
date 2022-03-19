import type { NextPage } from "next";
import { userService } from "../services";
import { Link } from "../components";
import { useEffect, useState } from "react";

import MoviesList from "../components/MoviesList";
import MovieListHeading from "../components/MovieHeading";
import SearchBox from "../components/SearchBox";

const Home: NextPage = () => {
  const [movies, setMovies] = useState([""]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  const getMovieRequestOnSearch = async (searchValue: any) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
    getMovieRequestOnSearch(searchValue);
  }, [searchValue]);

  return (
    <div className="p-4">
      <div className="container">
        <h1>Hi {userService.userValue?.firstName}!</h1>
      </div>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Movies" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="row">
          <MoviesList movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default Home;
