const express = require("express");
const app = express();
const stockRoutes = require("./routes/stock.routes");
const bodyParser = require("body-parser");
global.__basedir = __dirname + "/..";

stockRoutes(app); 
let port = 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
