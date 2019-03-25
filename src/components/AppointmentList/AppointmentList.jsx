import React from "react";
import styled from "styled-components";

const DrHeader = styled.header`
  font-size: 2em;
  font-weight: 800;
  padding: 1em 0 0 0;
`;

const Email = styled.div`
  padding: 0 0 1em 0;
`;

const AppointmentListWrapper = styled.table`
  border-collapse: collapse;
  padding: 0.5em 0 0 0;
`;

const AppointmentListHeader = styled.thead`
  background-color: ${props => props.theme.notableBlue};
  color: ${props => props.theme.white};
`;

const ColTopic = styled.th`
  text-align: left;
  padding: 0.5em;
`;

const Appointment = styled.tr`
  :nth-child(even) {
    background: ${props => props.theme.veryLightGrey};
  }
`;

const ApptData = styled.td`
  border-left: ${props => props.theme.veryLightGrey} 1px solid;
  border-right: ${props => props.theme.veryLightGrey} 1px solid;
  padding: 0.5em;
`;

const AppointmentList = ({ appointments, currPhysFullName, currPhysEmail }) => {
  let count = 0;
  return appointments.length ? (
    <React.Fragment>
      <DrHeader>Dr. {currPhysFullName}</DrHeader>
      <Email>{currPhysEmail}</Email>
      <AppointmentListWrapper>
        <AppointmentListHeader>
          <Appointment>
            <ColTopic>#</ColTopic>
            <ColTopic>Name</ColTopic>
            <ColTopic>Time</ColTopic>
            <ColTopic>Kind</ColTopic>
          </Appointment>
        </AppointmentListHeader>
        <tbody>
          {appointments.map(appt => {
            count++;
            return (
              <Appointment key={appt.name}>
                <ApptData>{count}</ApptData>
                <ApptData>{appt.name}</ApptData>
                <ApptData>{appt.time}</ApptData>
                <ApptData>{appt.kind}</ApptData>
              </Appointment>
            );
          })}
        </tbody>
      </AppointmentListWrapper>
    </React.Fragment>
  ) : null;
};

export default AppointmentList;
