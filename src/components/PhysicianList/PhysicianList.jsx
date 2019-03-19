import React from "react";
import "./PhysicianList.css";

const PhysicianList = ({ physicians, updateApptsOnClick }) => {
  return (
    <React.Fragment>
      <header className="notableHeader">notable</header>
      <div className="physListHeader">Physicians</div>
      <ul>
        {physicians.map(physician => (
          <li
            key={physician.id}
            onClick={e => updateApptsOnClick(e, physician.id)}
          >
            <span>
              {physician.lastName}, {physician.firstName}
            </span>
          </li>
        ))}
      </ul>
      <button>Logout</button>
    </React.Fragment>
  );
};

export default PhysicianList;
