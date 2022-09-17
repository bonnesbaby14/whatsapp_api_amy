

const express = require("express");
const cors = require("cors");
const app = express();
var mosca = require('mosca');
const port = 8080;

 


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



app.listen(port, () => {
    console.log("Server running on port "+port);
  });
