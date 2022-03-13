#!/usr/bin/env node
// node index.js

const _Port:any = require("serialport-node");

// console.log(_Port);
let path = "";

function handle(value:any){
  console.log("handle::",value);
}

function autoWrite(){
  setInterval(function () {
    _Port.write(path,[ 97, 98, 99, 100 ]);
  }, 1000);
}

_Port.list().then((v:any)=>{
  const size = v.length;
  if (size<1){
    return ;
  }
  const option = v[size-1];
  console.log("option:",option);
  path = option.path;
  _Port.createPort({ path: path, baudRate: 115200, autoOpen: true },handle);
  if (path =="")return;
  autoWrite();
  // _Port.close(path);
});


// 关闭服务器
// _Port.closeAllWorkers();

// node index.js