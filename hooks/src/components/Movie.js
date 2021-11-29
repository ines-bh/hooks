import React from "react";
import { Rate } from "antd";
import Rater from "./Rater";
import { Card} from "react-bootstrap";

const Movie = (props) => {
  return (
    <div className="imgstyle">
      {<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.movie.Poster} />
  <Card.Body>
    <Card.Title>{props.movie.Title}</Card.Title>
  </Card.Body>
  <Rater movie={props.movie.StarRating} />
  <Card.Body>
    
  </Card.Body>
</Card> } 
      </div>
  );
};

export default Movie;
