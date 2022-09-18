

var env = require('node-env-file'); // .env file
env(__dirname + '/.env');
const express = require("express");
const cors = require("cors");
const app = express();
var mosca = require('mosca');
const port = process.env.SERVERPORT;
const mqttPort=process.env.PORT;

console.log(port,mqttPort)

 


const bodyParser = require("body-parser");

const routecustomer = require("./router/customer");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/", routecustomer);




var server = new mosca.Server({
  port: mqttPort,
});

server.on('ready', function () {
  console.log("servidor mqtt mosca listo port" + mqttPort);
   
});



app.listen(port, () => {
    console.log("Server running on port "+port);
  });
