import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import App from "./index.js";

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

test("App snapshot", () => {
  const appComp = render(<App />);
  expect(appComp).toMatchSnapshot();
});
