import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const movieI : {
Actors:string | undefined
Awards: string | undefined
BoxOffice:string | undefined
Country:string | undefined
DVD: string | undefined
Director: string | undefined
Genre: string | undefined
Language: string | undefined
Metascore: string | undefined
Plot: string | undefined
Poster: string | undefined
Rated: string | undefined
Released: string | undefined
Response: string | undefined
Runtime:string | undefined
Title: string | undefined
Writer:string | undefined
Year: string | undefined
imdbID:string | undefined
imdbRating:string | undefined
imdbVotes: string | undefined
}
const Detail: NextPage = () => {
  const [searchValue, setSearchValue] = useState(movieI);
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const getMovieRequestOnSearch = async (searchValue: any) => {

    const url = `http://www.omdbapi.com/?i=${searchValue}&apikey=ae260b04`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
      setSearchValue(responseJson);
    }
  };

  useEffect(()=>{
    getMovieRequestOnSearch(id)
  },[])
  return (
    <div className="container">
      <div className="col-lg-8 border p-3 main-section bg-white">
        <div className="row hedding m-0 pl-3 pt-0 pb-3">Movie Detail</div>
        <div className="row m-0">
          <div className="col-lg-4 left-side-product-box pb-3">
            <img
              src={searchValue!?.Poster}
              className="border p-3"
            />
          </div>
          <div className="col-lg-8">
            <div className="right-side-pro-detail border p-3 m-0">
              <div className="row">
                <div className="col-lg-12">
                  <span>Movie Name:</span>
                  <p className="m-0 p-0">{searchValue!?.Title}</p>
                </div>
                <div className="col-lg-12">
                  <p className="m-0 p-0 price-pro">{searchValue!?.Year}</p>
                  <hr className="p-0 m-0" />
                </div>
                <div className="col-lg-12 pt-2">
                  <h5>Plot</h5>
                  <span>
                   {searchValue!?.Plot}
                  </span>
                  <hr className="m-0 pt-2 mt-2" />
                </div>
                <div className="col-lg-12">
                  <p className="tag-section">
                    <strong>Casr: {searchValue!?.Actors}</strong>
                  </p>
                </div>
                <div className="col-lg-12">
                  <h6>Director: {searchValue!?.Director}</h6>
                </div>
                <div className="col-lg-12">
                  <h6>Writer: {searchValue!?.Writer}</h6>
                </div>
                <div className="col-lg-12">
                  <h6>Year: {searchValue!?.Year}</h6>
                </div>
                <div className="col-lg-12">
                  <h6>imdb Vote: {searchValue!?.imdbVotes}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
