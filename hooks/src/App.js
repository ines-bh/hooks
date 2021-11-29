import React, { useState } from "react";
import Movies from "./components/Movies";
import { Form, FormControl, Button } from "react-bootstrap";
import { Rate } from "antd";
import Rater from "./components/Rater";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Moviescss from "./components/Movies.css";

function App() {
  const [movies, setMovies] = useState([
    {
      Title: "Inception",
      StarRating: "5",
      Poster:
        "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/608x608/products/86033/85594/inception_regular_original_us_one_sheet_buy_now_at_starstills__89316__22344.1394514865.jpg?c=2",
    },
    {
      Title: "Interstellar",
      StarRating: "4.5",
      Poster:
        "https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg",
    },
    {
      Title: "The Dark Knight",
      Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      StarRating: "4",
      Poster:
        "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
    },
    {
      Title: "Batman Begins",
      StarRating: "4",
      Poster:
        "https://fr.web.img3.acsta.net/medias/nmedia/18/35/23/40/18431141.jpg",
    },
    {
      Title: "Avatar",
      StarRating: "5",
      Poster:
        "https://img-4.linternaute.com/cip2YBDZkVvjU4a2tqiFIaf6Yhw=/1240x/a9bfc660898e44a19d2d36f463c9c955/ccmcms-linternaute/124775.jpg",
    },
  ]);

  const [search, setSearch] = useState("");
  const [rate, setRate] = useState("");
  return (
    <div className="App">
      <h2 className="titrepage">Movies Lists </h2>
      <div className="search">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
        <Stack spacing={1}>
          <Rating
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            onChange={(e) => setRate(e.target.value)}
          />
        </Stack>
      </div>
      <div>
        <Movies movies={movies} search={search} Rating={rate} />
      </div>
    </div>
  );
}

export default App;
