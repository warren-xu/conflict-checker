const express = require('express');
const router = express.Router();
const csvController = require("../controllers/projects/csv.controller");
const upload = require("../middleware/upload");

let routes = (app) => {
  router.post("/upload", upload.single("csv"), csvController.upload);      // routes for each REST API (upload csv)
  router.get("/projects", csvController.getAddresses);                     // get addresses of all projects
  router.post("/geocode", csvController.geoCode);                          // geocode addresses into lat/long

  app.use("/api/csv", router);              // path to referencing apis
};

module.exports = routes;  
