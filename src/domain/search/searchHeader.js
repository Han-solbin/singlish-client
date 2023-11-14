import React, { useState } from "react";

import { Coursesheader } from "../../organisms/header";
import { SearchModal } from ".";

const Searchheader = () => {
  const [isSearching, setIsSearching] = useState(false);

  const startSearchingHandler = () => {
    setIsSearching(true);
    console.log("Searching...");
  };

  const stopSearchingHandler = () => {
    setIsSearching(false);
    console.log("Search End...");
  };
  console.log(isSearching);
  return (
    <>
      {!isSearching && (
        <Coursesheader startSearching={startSearchingHandler}></Coursesheader>
      )}
      {isSearching && (
        <SearchModal stopSearching={stopSearchingHandler}></SearchModal>
      )}
    </>
  );
};
export default Searchheader;
