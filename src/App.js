import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import UploadFiles from "./components/upload-files.component";
import MapContainer from "./components/map-container.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: 'map'  // Initial component
    }
  }

  setActiveComponent = (component) => {
    this.setState({ activeComponent: component });
  }

  render() {
    const {activeComponent} = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        
          <div className="navbar-nav mr-auto">
          <li className="nav-item">
              <button onClick={() => this.setActiveComponent('map')} className="nav-link btn btn-dark">
                Home
              </button>
            </li>
             <li className="nav-item">
              <button onClick={() => this.setActiveComponent('upload')} className="nav-link btn btn-dark">
                Upload
              </button>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
            {activeComponent === 'map' && <MapContainer/>}
            {activeComponent === 'upload' && <UploadFiles/>}
        </div>
      </div>
    );
  }
}

export default App;