import React from "react";
import PhysicianList from "./../PhysicianList";
import axios from "axios";
import AppointmentList from "./../AppointmentList";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      physicians: [],
      appointments: [],
      currPhysId: 1
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
        console.log(appts.data);
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
      <div className="wrapper">
        <section>
          <PhysicianList
            physicians={physicians}
            updateApptsOnClick={this.updateApptsOnClick}
            handleLogoutClick={this.handleLogoutClick}
            currPhysId={currPhysId}
          />
        </section>
        <aside>
          <header className="drHeader">Dr. {currPhysFullName}</header>
          <div className="email">{currPhysEmail}</div>
          <AppointmentList appointments={appointments} />
        </aside>
      </div>
    );
  }
}

export default App;
