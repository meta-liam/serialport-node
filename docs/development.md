# 开发文档

## 快速开始

```shell

npm install typescript -g
npm i --registry=https://registry.npmmirror.com

npm run build

npm run dev

```

## test

npm run test:coverage

## 构建npm包

```shell mac
chmod a+x ./build-mac.sh && ./build-mac.sh
```

## 发布

先改好版本号,构建npm包,再执行发布命令便可。

```shell
cd ./
chmod a+x ./build-mac.sh && ./build-mac.sh
npm publish

```

## 硬件测试

[Arduino例子](./../example/arduino/back_send_string/back_send_string.ino)
