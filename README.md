# serialport-node

node语言实现的串口封装,支持多实例。

## 使用安装

```shell
npm install serialport-node

npm i serialport-node --registry=https://registry.npmmirror.com
```

## 例子

```ts
const _Port:any = require("serialport-node");
const data = [ 97, 98, 99, 100 ];
let path = "";

function handle(value:any){
  console.log("handle::",value);
}

function autoWrite(){
  setInterval(function () {
    _Port.write(path,data);
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
```

[electron使用例子](https://github.com/meta-liam/electron-serialport-demo)

## 快速开始

[开发文档](https://github.com/meta-liam/serialport-node)

```shell
npm i --registry=https://registry.npmmirror.com
npm run build
node ./example/index.js
```
