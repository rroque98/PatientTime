import React from "react";

const PhysicianList = ({ physicians }) => {
  return (
    <div>
      {physicians.map(physician => (
        <div>physician.firstName physician.lastName</div>
      ))}
    </div>
  );
};

export default PhysicianList;
