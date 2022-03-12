#!/usr/bin/env node
const Port = require("serialport-node");

Port.list().then((v: any)=>{
    console.log(v);
});

