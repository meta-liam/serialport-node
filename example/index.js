#!/usr/bin/env node
// node src/test/index.js

const Port = require("../dist/index").default;

// console.log(Port);
let path = "";

function handle(value){
  console.log("handle::",value);
  // if (value && value.type =="open" && value.data.open){
  //   // Port.write(path,[ 97, 98, 99, 100 ]);
  // }
}

function autoWrite(){
  if (path =="")return;
  setInterval(function () {
    Port.write(path,[ 97, 98, 99, 100 ]);
  }, 1000);
}

Port.list().then((v)=>{
  const size = v.length;
  if (size<1){
    return ;
  }
  const option = v[size-1];
  console.log("option:",option);
  path = option.path;
  Port.createPort({ path: path, baudRate: 115200, autoOpen: true },handle);
  
  autoWrite();
  // Port.close(option.path);
});


// 关闭服务器
// Port.closeAllWorkers();

// node ./example/index.js