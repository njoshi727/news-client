import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import NewsBox from "./Components/NewsBox";

function App() {
  const [searchWordAndParameter, setSearchWordAndParameter] = useState({
    searchWord: "headlines",
    parameter: "headlines",
  });

  function handleSearchWordAndParameter(searchWord, parameter) {
    setSearchWordAndParameter({
      searchWord: searchWord,
      parameter: parameter,
    });
  }

  return (
    <>
      <Navbar handleSearchWordAndParameter = {handleSearchWordAndParameter}></Navbar>
      <NewsBox 
        searchWord={searchWordAndParameter.searchWord}
        parameter={searchWordAndParameter.parameter}
      ></NewsBox>
    </>
  );
}

export default App;
