import React from "react";
import "./AppointmentList.css";

const AppointmentList = ({ appointments }) => {
  let count = 0;
  console.log(appointments);
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Time</th>
          <th>Kind</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map(appt => {
          count++;
          return (
            <tr key={appt.name}>
              <td>{count}</td>
              <td>{appt.name}</td>
              <td>{appt.time}</td>
              <td>{appt.kind}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AppointmentList;
