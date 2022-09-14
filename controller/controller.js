const controller = {};

const express = require("express");
const qrcode = require('qrcode-terminal');

const app = express();
const session = require("../utils/session");


controller.connect= async(req,res)=>{




   const newSession=new session(req.body.id);
    
   newSession.on(`qr`, (qr) => {
		
    console.log("llego un nuevo qr")
        res.status(200).send({
            "qr": qrcode.generate(qr, {small: true}),
          });
	});

    newSession.on(`authenticated`, () => {
		
        console.log("ya estamos actividados")
            res.status(200).send({
                "qr": "ready",
              });
        });
     
    
  

    
}







module.exports = controller;