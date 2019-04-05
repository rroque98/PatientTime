import React from "react";
import PhysicianList from "./../PhysicianList";
import axios from "axios";
import AppointmentList from "./../AppointmentList";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  lightGrey: "#e8eaf3b6",
  veryLightGrey: "#eeeff5b6",
  notableBlue: "#0073e6",
  white: "#fff",
  black: "#000",
  darkGrey: "#5f5d5db6",
  darkBlue: "#0267cc"
};

const Wrapper = styled.div`
  display: grid;
  margin: 1%;
  @media (max-width: 610px) {
    display: flex;
    flex-direction: column;
  }
`;

const PhysListSection = styled.section`
  background: ${props => props.theme.lightGrey};
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  box-shadow: 1px 0 5px -2px ${props => props.theme.darkGrey};
  @media (max-width: 610px) {
    box-shadow: 0 1px 2px -2px ${props => props.theme.darkGrey};
  }
`;

const ApptListSection = styled.aside`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  padding: 1em;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      physicians: [],
      appointments: [],
      currPhysId: 1,
      currPhysFullName: null,
      currPhysEmail: null
    };
    this.getPhysicians = this.getPhysicians.bind(this);
    this.getAppointmentsByPhysId = this.getAppointmentsByPhysId.bind(this);
    this.updateApptsOnClick = this.updateApptsOnClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  componentDidMount() {
    this.getPhysicians();
    this.getAppointmentsByPhysId(1);
  }

  getPhysicians() {
    axios
      .get("/physicians")
      .then(physicians => {
        this.setState({
          physicians: physicians.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getAppointmentsByPhysId(id) {
    axios
      .get(`/appointments/${id}`)
      .then(appts => {
        appts.data.sort((a, b) => {
          let timeA = Number(a.time.replace(":", "."));
          let timeB = Number(b.time.replace(":", "."));
          // Assuming office is not open past 7pm
          if (timeA >= 1 && timeA < 7) {
            timeA += 12;
          } else if (timeB >= 1 && timeB < 7) {
            timeB += 12;
          }
          return timeA < timeB ? -1 : 1;
        });
        this.setState({
          appointments: appts.data,
          currPhysFullName: `${appts.data[0].firstName} ${
            appts.data[0].lastName
          }`,
          currPhysEmail: appts.data[0].email
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateApptsOnClick(e, id) {
    e.preventDefault();
    this.setState({
      currPhysId: id
    });
    this.getAppointmentsByPhysId(id);
  }

  handleLogoutClick(e) {
    e.preventDefault();
    alert("Logged out successfully!");
  }

  render() {
    const {
      physicians,
      currPhysFullName,
      currPhysEmail,
      appointments,
      currPhysId
    } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <PhysListSection>
            <PhysicianList
              physicians={physicians}
              updateApptsOnClick={this.updateApptsOnClick}
              handleLogoutClick={this.handleLogoutClick}
              currPhysId={currPhysId}
            />
          </PhysListSection>
          <ApptListSection>
            <AppointmentList
              appointments={appointments}
              currPhysFullName={currPhysFullName}
              currPhysEmail={currPhysEmail}
            />
          </ApptListSection>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
