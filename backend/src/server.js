const express = require("express");
const app = express();
const stockRoutes = require("./routes/stock.routes");
const bodyParser = require("body-parser");
const db = require("./models");
global.__basedir = __dirname + "/..";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors())
stockRoutes(app); 
let port = 8080;
db.sequelize.sync();
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
