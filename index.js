

const express = require("express");
const cors = require("cors");
const app = express();
var mosca = require('mosca');



const bodyParser = require("body-parser");

const routecustomer = require("./router/customer");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/", routecustomer);




var server = new mosca.Server({
  port: 1883,
});

server.on('ready', function () {
  console.log("servidor mqtt mosca listo");
   
});



app.listen(80, () => {
    console.log("Server running on port 5000");
  });
