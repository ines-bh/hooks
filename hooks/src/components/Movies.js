import React from "react";
import Movie from "./Movie";
import { Modal, Button } from "react-bootstrap";

const Movies = (props) => {
  return (
    <div className="listMovies">
      {props.movies
        .filter(
          (el) =>
            el.Title.toLowerCase().includes(props.search.toLowerCase()) &&
            el.StarRating >= props.Rating
        )
        .map((movie, index) => (
          <Movie movie={movie} />
        ))}
    </div>
  );
};

export default Movies;
