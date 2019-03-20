import React from "react";
import Physician from "./../Physician";
import "./PhysicianList.css";

const PhysicianList = ({
  physicians,
  updateApptsOnClick,
  handleLogoutClick,
  currPhysId
}) => {
  return physicians.length ? (
    <React.Fragment>
      <header className="notableHeader">notable</header>
      <div className="physListHeader">PHYSICIANS</div>
      <ul className="physList">
        {physicians.map(physician => (
          <Physician
            physician={physician}
            updateApptsOnClick={updateApptsOnClick}
            currPhysId={currPhysId}
            key={physician.id}
          />
        ))}
      </ul>
      <button onClick={handleLogoutClick}>Logout</button>
    </React.Fragment>
  ) : null;
};

export default PhysicianList;
