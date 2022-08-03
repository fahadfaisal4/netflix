import React, { useEffect, useState } from "react";
import Youtube from "react-youtube"
import "./RowPost.css";
import { API_KEY, imageurl } from "../../Constants/Constants";
import axios from "../../axios";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState()
  const [movieTitle,setMovieTitle] = useState()


  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  

  const handleMovie = (id,indexOfId) =>{
          setMovieTitle(indexOfId)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
          if(response.data.results.length !==0){
            setUrlId(response.data.results[0])
          }else{
            return(
              <div className="movieDetails">
                No Movie Videos Found :(
              </div>
            )
          }
        })
  }


  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {
        movies.map((obj,index) => {
          return (
            <img id="poster"
            onClick={()=>handleMovie(obj.id,index)}
              className={props.isSmall ? "smallPoster" : "poster"}
              alt="poster"
              src={`${imageurl + obj.backdrop_path}`}
            />
          );
        })
        }
      </div>

        {
        urlId &&
        <div className="movieDetails">

        <p className="movieName">
          {urlId.name}
       </p>
       <p className="movieTitle">
        {movies[movieTitle ? movieTitle : 1].overview}
       </p>
      <Youtube videoId={urlId.key} opts={opts}/>
      </div>
      }
    </div>
  );
}

export default RowPost;
