import React from "react";
import { GrReddit } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";

import "./SearchLogo.css";

const SearchLogo = () => {
  return (
    <div className="searchlogo">
      <GrReddit style={{ width: "35px", height: "35px" }} />
      <div className="search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <AiOutlineSearch style={{ width: "20px", height: "20px" }} />
        </div>
      </div>
    </div>
  );
};

export default SearchLogo;
