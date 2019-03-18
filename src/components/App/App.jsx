import React from "react";
import PhysicianList from "./../PhysicianList";
import axios from "axios";
import AppointmentList from "./../AppointmentList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      physicians: [],
      appointments: []
    };
    this.getPhysicians = this.getPhysicians.bind(this);
    this.getAppointmentsByPhysId = this.getAppointmentsByPhysId.bind(this);
  }
  componentDidMount() {
    this.getPhysicians();
    this.getAppointmentsByPhysId(1);
  }

  getPhysicians() {
    axios
      .get("/physicians")
      .then(physicians => {
        console.log(physicians.data);
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
      .then(appointments => {
        console.log(appointments.data);
        this.setState({
          appointments: appointments.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <header>Notable</header>
        <section>
          <PhysicianList physicians={this.state.physicians} />
        </section>
        <aside>
          <AppointmentList appointments={this.state.appointments} />
        </aside>
        <div>after list</div>
      </div>
    );
  }
}

export default App;
