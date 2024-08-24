const express = require('express');
const router = express.Router();
const csvController = require("../controllers/projects/csv.controller");
const upload = require("../middleware/upload");

let routes = (app) => {
  router.post("/upload", upload.single("csv"), csvController.upload);
  router.get("/projects", csvController.getAddresses);
  router.post("/geocode", csvController.geoCode);
  // router.delete("/projects", csvController.delProjects);

  app.use("/api/csv", router);
};

module.exports = routes;  