require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const { databaseService } = require("./services/databaseService");
const morgan = require("morgan");
const app = express();
app.set("port", 3000);

// app.use(express.json());
app.use(bodyParser.json());
app.use(morgan("combined"));


require("./routes")(app, databaseService());

app.listen(app.get("port"), function () {
  console.log(`server on port ${app.get("port")}`);
});
