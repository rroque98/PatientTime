import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import PhysicianList from "./index.js";

afterEach(cleanup);
const physicians = [
  {
    id: 1,
    firstName: "Morris",
    lastName: "Coppedge"
  },
  {
    id: 2,
    firstName: "Evela",
    lastName: "Lonergan"
  },
  {
    id: 3,
    firstName: "Random",
    lastName: "Name"
  },
  {
    id: 4,
    firstName: "Elizabeth",
    lastName: "Walker"
  },
  {
    id: 5,
    firstName: "Rani",
    lastName: "Peltarik"
  }
];
test("should find Logout button", () => {
  const { getByText } = render(
    <PhysicianList physicians={physicians} currPhysId={1} />
  );
  const elem = getByText("Logout");
  expect(elem.innerHTML).toBe("Logout");
  fireEvent.click(elem);
});

test("PhysicianList snapshot", () => {
  const physListComp = render(
    <PhysicianList physicians={physicians} currPhysId={1} />
  );
  expect(physListComp).toMatchSnapshot();
});
