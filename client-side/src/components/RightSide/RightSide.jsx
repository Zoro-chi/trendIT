import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./RightSide.css";
import TrendCard from "../TrendCard/TrendCard.jsx";
import { AiOutlineHome } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import ShareModal from "../ShareModal/ShareModal.jsx";

function RightSide(props) {
  const { modalOpened, setModalOpened } = useState(false);

  return (
    <div className="rightSide">
      <div className="navIcons">
        <Link to="../home">
          <AiOutlineHome />
        </Link>
        <FiSettings />
        <IoIosNotificationsOutline />
        <BiCommentDetail />
      </div>

      <TrendCard />
      <button className="button r-button"> Share </button>
      {/* <ShareModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          /> */}
    </div>
  );
}

export default RightSide;
