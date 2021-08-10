import React from "react";
import { describe } from "riteway";
import render from "riteway/render-component";
import { MemoryRouter } from "react-router-dom";

import MovieCard from "../../components/Cards/movieCard";

describe("Movie card component", async (assert) => {
  const props = {
    Title: "Batman: The Killing Joke",
    Year: "2016",
    imdbID: "tt4853102",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  };

  const $ = render(
    <MemoryRouter>
      <MovieCard
        title={props.Title}
        year={props.Year}
        id={props.imdbID}
        type={props.Type}
        poster={props.Poster}
      />
    </MemoryRouter>
  );

  assert({
    given: "title",
    should: "display title",
    actual: $(".movie-title").html(),
    expected: props.Title,
  });

  assert({
    given: "year and type",
    should: "display year & type",
    actual: $(".year-type").html(),
    expected: `${props.Year} - ${props.Type}`,
  });
});
