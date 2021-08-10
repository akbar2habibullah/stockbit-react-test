import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import {
  selectDetail,
  selectLoading,
  selectMessage,
  fetchDetail,
} from "../store/slices/detailSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const detail = useSelector(selectDetail);
  const loading = useSelector(selectLoading);
  const message = useSelector(selectMessage);

  useEffect(() => dispatch(fetchDetail(id)), [id, dispatch]);

  return (
    <div>
      {loading ? (
        <div className="w-full text-center text-gray-400 mt-20">
          <FontAwesomeIcon
            icon={faSpinner}
            size="2x"
            className="animate-spin"
          />
        </div>
      ) : (
        <div className="pb-20 flex flex-col md:flex-row">
            <LazyLoadImage
                className="object-cover w-full rounded-lg md:w-60 lg:w-96"
                src={detail.Poster}
                alt={detail.Title}
                effect="blur"
              />
              <div className="py-5 px-2 md:py-0 md:px-5 w-full">
                <h1 className="font-bold text-3xl">{`${detail.Title} (${detail.Year})`}</h1>
                <div className="my-4">
                  <h2 className="font-semibold text-xl">
                    {detail.Runtime} - {detail.Language}
                  </h2>
                  <h2 className="font-semibold text-xl">
                    Genre: {detail.Genre}
                  </h2>
                  <h2 className="font-semibold text-xl">
                    Actors: {detail.Actors}
                  </h2>
                  <h2 className="font-semibold text-xl">
                    Rating: {detail.imdbRating} {"(imdb)"}
                  </h2>
                </div>

                <h2 className="font-semibold text-xl">Plot:</h2>
                <p className="text-gray-600 text-justify">{detail.Plot}</p>
              </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
