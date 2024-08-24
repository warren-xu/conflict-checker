require('dotenv').config();
const express = require("express");
const cors = require("cors"); // Import cors
const app = express();
const db = require("./models");
const initRoutes = require("./routes/project.routes");

global.__basedir = __dirname + "/..";
// Enable CORS for all routes

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.REACT_APP_URL // Allow only this origin
}));
initRoutes(app);


db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
//db.sequelize.sync();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Running at localhost:${PORT}`);
});