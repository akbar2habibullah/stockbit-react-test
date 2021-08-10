import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import {
  selectList,
  selectLoading,
  selectMessage,
  fetchMore,
} from "../store/slices/listSlice";

import MovieCard from "../components/Cards/movieCard";

const Home = () => {
  const dispatch = useDispatch();

  const list = useSelector(selectList);
  const loading = useSelector(selectLoading);
  const message = useSelector(selectMessage);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (message === "") {
        dispatch(fetchMore());
      }
    }
  };

  return (
    <div className="pb-40">
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5 w-full text-center">
        {list.map((movie) => (
          <MovieCard
            title={movie.Title}
            year={movie.Year}
            id={movie.imdbID}
            type={movie.Type}
            poster={movie.Poster}
            key={movie.imdbID}
          />
        ))}
      </section>
      <div className="text-center text-gray-400 text-4xl mt-10">{message}</div>
      {loading ? (
        <div className="text-center text-gray-400 mt-10">
          <FontAwesomeIcon
            icon={faSpinner}
            size="2x"
            className="animate-spin"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
