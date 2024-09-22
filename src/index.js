import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from './App';


const container = document.getElementById("root");    // retrieve DOM element with ID root (from index.html)
const root = createRoot(container);                   // initialize React application for rendering


root.render(
  <BrowserRouter basename="/conflict-checker">    
    <App />
  </BrowserRouter>
);
