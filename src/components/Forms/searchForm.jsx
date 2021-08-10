import React from "react";
import { useDispatch } from "react-redux";

import { changeSearch, fetchMore } from "../../store/slices/listSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => {
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    if (e.key === "Enter") {
      await dispatch(changeSearch(e.target.value));
      dispatch(fetchMore());
    }
  };

  return (
    <div className="bg-white rounded flex items-center w-full p-3 shadow-box focus-within:text-yellow-400">
      <div className="cursor-pointer flex-none">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </div>
      <input
        type="search"
        onKeyDown={handleChange}
        placeholder="search for movies"
        className="w-full flex-grow pl-4 text-sm outline-none bg-transparent"
      />
    </div>
  );
};

export default SearchForm;
