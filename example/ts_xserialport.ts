// import MySerialPort from "../myserialport";


// const _path = '/dev/tty.usbmodem141101';
// let _port = new MySerialPort({ path: _path, baudRate: 115200, autoOpen: false })

// const _onHandle = (type: string, data: any) => {
//     console.log(type, data);
// };
// // _port.onHandler = onHandle;
// let v = _port.open()

// let sendData = 'abcd';
// const buff = Buffer.from(sendData, "utf8");//<Buffer 61 62 63 64>

// setInterval(function () {
//     _port.onWrite(buff);
// }, 5000);

// // ts-node ./test/ts_serialport.ts
// // ts ./test/ts_serialport.ts