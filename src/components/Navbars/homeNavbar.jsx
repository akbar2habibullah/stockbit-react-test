import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import SearchForm from "../Forms/searchForm";

const homeNavbar = () => {
  return (
    <div className="sticky top-0 p-5 lg:px-24 flex flex-col md:flex-row items-center text-gray-400">
      <div className="omdb-logo flex-none text-3xl font-semibold text-yellow-400 md:mr-5">
        OMDB App
      </div>
      <div className="flex-grow flex items-center mt-5 md:mt-0">
        <SearchForm className="flex-grow search-form" />
        <div className="flex-none hover:text-yellow-400 ml-5">
          <Link to="/">
            <FontAwesomeIcon className="home-button" icon={faHome} size="2x" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default homeNavbar;
