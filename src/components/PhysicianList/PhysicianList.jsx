import React from "react";
import Physician from "./../Physician";
import styled from "styled-components";

const TitleHeader = styled.header`
  color: ${props => props.theme.notableBlue};
  font-size: 2em;
  font-weight: 600;
  padding: 0.5em;
`;

const PhysListHeader = styled.header`
  font-size: 1em;
  font-weight: 600;
  padding: 1em 1em 0 1em;
`;

const PhysListWrapper = styled.ul`
  padding: 0;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto 1em auto;
  padding: 0.5em 1em;
  background: ${props => props.theme.notableBlue};
  color: ${props => props.theme.white};
  border-radius: 6px;
  text-align: center;
  outline: none;
  font-size: 1em;
  font-weight: 600;
  :hover {
    background: ${props => props.theme.darkBlue};
  }
`;

const PhysicianList = ({
  physicians,
  updateApptsOnClick,
  handleLogoutClick,
  currPhysId
}) => {
  return physicians.length ? (
    <React.Fragment>
      <TitleHeader>PatientTime</TitleHeader>
      <PhysListHeader>PHYSICIANS</PhysListHeader>
      <PhysListWrapper>
        {physicians.map(physician => (
          <Physician
            physician={physician}
            updateApptsOnClick={updateApptsOnClick}
            currPhysId={currPhysId}
            key={physician.id}
          />
        ))}
      </PhysListWrapper>
      <Button onClick={handleLogoutClick}>Logout</Button>
    </React.Fragment>
  ) : null;
};

export default PhysicianList;
