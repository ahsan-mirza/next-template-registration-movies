import React from "react";
import Link from "next/link";
export default function MoviesList(props: any) {

  return (
    <>
      {props.movies.map((movie: { Poster: string | undefined, imdbID: string | undefined }, index: any) => (
        <Link
          href={{
            pathname: "/detail",
            query: { id: movie.imdbID },
          }}
        >
          <div
            className="image-container d-flex justify-content-start m-3 col justify-content-center border"
            key={index}
          >
            <img src={movie.Poster} alt="movie"></img>
          </div>
        </Link>
      ))}
    </>
  );
}
