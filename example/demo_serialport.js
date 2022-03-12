const { SerialPort } = require('serialport')

let _port = new SerialPort({ path: '/dev/tty.usbmodem141301', baudRate: 115200 })

//发Array
// var buff = [0x61, 0x62, 0x63, 0x64]; //abcd [ 97, 98, 99, 100 ]
// console.log("array:", buff);

//发字符串
let sendData = 'abcd';
const buff = Buffer.from(sendData, "utf8");//<Buffer 61 62 63 64>

// hex string
// let sendData = '0x61626364';
// const buff = Buffer.from(sendData, "hex");

function writePort() {
    _port.write(buff, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
        console.log("------------------------")
        console.log('send st: ', sendData);
        console.log('send buff: ', buff);
    });
}

_port.on('open', function () {
    writePort();
});

// open errors will be emitted as an error event
_port.on('error', function (err) {
    console.log('Error: ', err.message);
})

setInterval(function () {
    writePort();
}, 5000);


_port.on('data', function (data) {
    console.log('recv data: ', data);
    const db = Array.prototype.slice.call(data, 0);
    console.log('recv Array: ', db);
    //收hex
    console.log('recv hex: ', data.toString('hex'));
    //收字符串
    console.log('recv ascii: ' + data.toString('ascii'));
});
/**
send st:  abcd
send buff:  <Buffer 61 62 63 64>
recv data:  <Buffer 61 62 63 64 0d 0a>
recv Array:  [ 97, 98, 99, 100, 13, 10 ]
recv hex:  616263640d0a
recv ascii: abcd
*/

//  node example/demo_serialport.js