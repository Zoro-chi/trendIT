import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

import "./InfoCard.css";
import ProfileModal from "../ProfileModal/ProfileModal.jsx";

function InfoCard() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4> Your Info </h4>
        <div>
          <FiEdit2 onClick={() => setModalOpened(true)} />
          {/* <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          /> */}
        </div>
      </div>

      <div className="info">
        <span>
          <b> Status </b>
        </span>
        <span> In Relationship </span>
      </div>

      <div className="info">
        <span>
          <b> Lives in </b>
        </span>
        <span> Lagos </span>
      </div>

      <div className="info">
        <span>
          <b> Works at </b>
        </span>
        <span> @100Devs </span>
      </div>

      <button className="button logoutBtn">Logout</button>
    </div>
  );
}

export default InfoCard;
