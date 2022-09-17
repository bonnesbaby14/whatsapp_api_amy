const controller = {};

const express = require("express");
const qrcode = require('qrcode-terminal');

const app = express();
const session = require("../utils/session");

var mqtt = require('mqtt');


controller.index=(req,res)=>{
    res.status(200).send({
        "status": "En linea",
    });
}
controller.connect = async (req, res) => {


   

    const newSession = new session(req.body.id);

    newSession.on(`qr`, (qr) => {

        console.log("llego un nuevo qr")
        res.status(200).send({
            "qr": qr,
        });
    });

    newSession.on(`authenticated`, () => {

        console.log("whatsapp conecado")
        res.status(200).send({
            "qr": "ready",
        });
    });

    newSession.on('message', async message => {
        var contacto=await message.getContact();
        var  client  = mqtt.connect('mqtt://fastidious-blini-211e6f.netlify.app')
         const dataMessage={
            "message":message.body,
            "type":message.type,
            "name":contacto.name
        }
        client.publish('whatsapp', JSON.stringify(dataMessage));
        console.log(JSON.stringify(dataMessage))

    });
     








}







module.exports = controller;