import React from "react";

const PhysicianList = ({ physicians }) => {
  return (
    <div>
      <h1>Notable</h1>
      <h3>Physicians</h3>
      <ul>
        {physicians.map(physician => (
          <li key={physician.id}>
            {physician.lastName}, {physician.firstName}
          </li>
        ))}
      </ul>
      <button>Logout</button>
    </div>
  );
};

export default PhysicianList;
