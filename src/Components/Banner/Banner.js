import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY, imageurl } from "../../Constants/Constants";

function Banner() {
  const [movie, setMovie] = useState();
  const randomPoster = Math.floor(Math.random() * 19) + 1

  useEffect(() => {
    axios
      .get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setMovie(res.data.results[randomPoster]);
      });
  }, []);

  return (
    <div className="banner"
      style={{
        backgroundImage: `url(${movie ? imageurl + movie.backdrop_path : ""})`
      }}
    >
      <div className="content">
        <h1 className="tittle">{movie ? movie.title : ""}</h1>

        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="discription">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
