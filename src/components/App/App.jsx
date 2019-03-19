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
      appointments: []
    };
    this.getPhysicians = this.getPhysicians.bind(this);
    this.getAppointmentsByPhysId = this.getAppointmentsByPhysId.bind(this);
    this.updateApptsOnClick = this.updateApptsOnClick.bind(this);
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
        this.setState({
          appointments: appts.data.patientList,
          currPhysFullName: `${appts.data.firstName} ${appts.data.lastName}`,
          currPhysEmail: appts.data.email
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateApptsOnClick(e, id) {
    e.preventDefault();
    this.getAppointmentsByPhysId(id);
  }

  render() {
    const {
      physicians,
      currPhysFullName,
      currPhysEmail,
      appointments
    } = this.state;
    return (
      <div className="wrapper">
        <section>
          <PhysicianList
            physicians={physicians}
            updateApptsOnClick={this.updateApptsOnClick}
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
