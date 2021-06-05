import React, { useState, useEffect } from "react";
import axios from "./axios";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Rows.css";

// console.log("Netflix Clone")
//
export default function Rows({ title, fetchUrl, isLargeRow }) {
  // console.log(axios.get(fetchUrl))
  // console.log("My name is Amit Kumar")

  // movies used as a state and setMovies is used as a setState
  const base_url = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log("Amit Kumar Amit Kumar Amit Kumar")
      setMovies(request.data.results);
      // console.log(movies)
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);

  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          // console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {/* several posters here */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => {
              handleClick(movie);
            }}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`} //if isLargeRow is true then give className as "row_posterLarge" otherwise row_poster
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path //if isLargeRow is true then poster_path otherwise poster_drop
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      <div>
        {" "}
        {/* style={{ padding: "40px" }} */}
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}
