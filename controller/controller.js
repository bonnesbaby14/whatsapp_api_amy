const controller = {};

const express = require("express");
const qrcode = require('qrcode-terminal');

const app = express();
const session = require("../utils/session");

var mqtt = require('mqtt');


controller.connect = async (req, res) => {


   

    const newSession = new session(req.body.id);

    newSession.on(`qr`, (qr) => {

        console.log("llego un nuevo qr")
        res.status(200).send({
            "qr": qrcode.generate(qr, { small: true }),
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
        var  client  = mqtt.connect('mqtt://192.168.100.39')
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