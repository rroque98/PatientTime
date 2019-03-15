import React from "react";
import PhysicianList from "./../PhysicianList";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      physicians: []
    };
    this.getPhysicians = this.getPhysicians.bind(this);
  }
  componentDidMount() {
    this.getPhysicians();
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
  render() {
    return (
      <div>
        <header>Notable</header>
        <PhysicianList physicians={this.state.physicians} />
        <div>after list</div>
      </div>
    );
  }
}

export default App;
