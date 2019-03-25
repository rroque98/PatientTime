import React from "react";
import styled from "styled-components";

const AppointmentRow = styled.li`
  list-style-type: circle;
  line-height: 2em;
  color: ${props => props.theme.darkGrey};
  list-style-position: inside;
  text-indent: 1em;
  background-color: ${props => (props.select ? props.theme.notableBlue : null)};
`;

const ApptText = styled.span`
  color: ${props => (props.select ? props.theme.white : props.theme.black)};
`;

const Physician = ({ physician, updateApptsOnClick, currPhysId }) => {
  let classPhys = "";
  if (currPhysId === physician.id) {
    classPhys += "select";
  }

  return (
    <AppointmentRow
      select={classPhys}
      className={classPhys}
      onClick={e => updateApptsOnClick(e, physician.id)}
    >
      <ApptText select={classPhys}>
        {physician.lastName}, {physician.firstName}
      </ApptText>
    </AppointmentRow>
  );
};

export default Physician;
