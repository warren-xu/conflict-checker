import React, { Component } from "react";
import {Routes, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import UploadFiles from "./components/upload-files.component";
import MapContainer from "./components/map-container.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        
          <div className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
             <li className="nav-item">
              <Link to={"/upload"} className="nav-link">
                Upload
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<MapContainer/>} />
            <Route path="/projects" element={<MapContainer/>} />
            <Route path="/upload" element={<UploadFiles/>} />
          </Routes>
        </div>
      </div>
    )
  }
}

export default App;