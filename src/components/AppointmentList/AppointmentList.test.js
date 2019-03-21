import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import AppointmentList from "./index.js";

afterEach(cleanup);

test("AppointmentList snapshot", () => {
  const appointments = [
    {
      time: "8:15",
      name: "Tameka Facer",
      kind: "New Patient"
    },
    {
      time: "9:15",
      name: "Elma Lewallen",
      kind: "Follow Up"
    },
    {
      time: "11:30",
      name: "Rusty Montufar",
      kind: "New Patient"
    },
    {
      time: "2:15",
      name: "Belma Flinn",
      kind: "New Patient"
    }
  ];
  const apptListComp = render(
    <AppointmentList
      appointments={appointments}
      currPhysFullName={"Rand Phys"}
      currPhysEmail={"randPhys@dr.com"}
    />
  );
  expect(apptListComp).toMatchSnapshot();
});
