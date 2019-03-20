import React from "react";
import "./Physician.css";

const Physician = ({ physician, updateApptsOnClick, currPhysId }) => {
  let classPhys = "";
  if (currPhysId === physician.id) {
    classPhys += "physician";
  }

  return (
    <li
      className={classPhys}
      onClick={e => updateApptsOnClick(e, physician.id)}
    >
      <span>
        {physician.lastName}, {physician.firstName}
      </span>
    </li>
  );
};

export default Physician;
