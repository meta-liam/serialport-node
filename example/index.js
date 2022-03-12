#!/usr/bin/env node
// node src/test/index.js

const MlinkServer = require("../lib/src/mlink");
// const server = new MlinkServer();

// 启动服务器, 默认端口52384, 支持传入参数自定义
const server = new MlinkServer(8888);

// 监听服务器启动成功
server.on("connection", () => {
  console.log("xlink server start success");
});

// 监听服务器启动失败
server.on("error", () => {
  console.log("xlink server start fail");
});

// 关闭服务器
// server.stop();
