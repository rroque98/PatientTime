import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import Physician from "./index.js";
import "jest-styled-components";

afterEach(cleanup);

const physician = {
  id: 1,
  lastName: "physLastName",
  firstName: "physFirstName"
};

// test("should apply physician class to li that is currently selected", () => {
//   const { getByText } = render(
//     <Physician physician={physician} currPhysId={1} />
//   );
//   const elem = getByText(`${physician.lastName}, ${physician.firstName}`);
//   expect(elem.parentNode.classList[0]).toBe("physician");
// });

// test("should not apply physician class to li that is not selected", () => {
//   const { getByText } = render(
//     <Physician physician={physician} currPhysId={2} />
//   );
//   const elem = getByText(`${physician.lastName}, ${physician.firstName}`);
//   expect(elem.parentNode.classList[0]).toBe(undefined);
// });

test("Physician snapshot", () => {
  const physComp = render(<Physician physician={{ id: 1, currPhysId: 1 }} />);
  expect(physComp).toMatchSnapshot();
  expect(physComp.firstChild).toMatchSnapshot();
});
