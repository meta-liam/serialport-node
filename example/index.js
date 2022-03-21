#!/usr/bin/env node
// node ./example/index.js

const _Port = require("../dist/index");//.default;

//console.log(_Port);
let path = "";

function handle(value){
  console.log("handle::",value);
}

function autoWrite(){
  if (path =="")return;
  setInterval(function () {
    _Port.write(path,[ 97, 98, 99, 100 ]);
  }, 1000);
}

function run(){
    _Port.list().then((v)=>{
      console.log("list:",v);
      const size = v.length;
      if (size<1){
        return ;
      }
      const option = v[size-1];
      console.log("option:",option);
      path = option.path;
      _Port.createPort({ path: path, baudRate: 115200, autoOpen: true },handle);
      
      autoWrite();
      // _Port.close(option.path);
    });
}

run();

// 关闭服务器
// _Port.closeAllWorkers();

// node ./example/index.js