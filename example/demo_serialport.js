const { SerialPort } = require('serialport')

let _port = new SerialPort({ path: '/dev/tty.usbmodem141301', baudRate: 115200 })

//发hex
// var senddata_hel = [0x61, 0x62, 0x63, 0x64]; //abcd [ 97, 98, 99, 100 ]
// console.log("hex:", senddata_hel);

//发字符串
let senddata = 'abcd';
const buff = Buffer.from(senddata, "utf8");//<Buffer 61 62 63 64>

function writeport() {
    _port.write(buff, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
        console.log("------------------------")
        console.log('send st: ', senddata);
        console.log('send buff: ', buff);
    });
}

_port.on('open', function () {
    writeport();
});

// open errors will be emitted as an error event
_port.on('error', function (err) {
    console.log('Error: ', err.message);
})

setInterval(function () {
    writeport();
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

//  node test/ts_serialport.js