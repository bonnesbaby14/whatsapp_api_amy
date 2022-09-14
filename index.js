

const express = require("express");
const cors = require("cors");
const app = express();


const bodyParser = require("body-parser");

const routecustomer = require("./router/customer");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/", routecustomer);




app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
