/*
import { SerialPort, SerialPortMock } from 'serialport'

// https://www.rapidtables.com/convert/number/hex-to-ascii.html

describe("serialport:list", () => {
    it("SerialPort:", () => {
        console.log(SerialPort)
    });

    it("SerialPort.list", (done) => {
        SerialPort.list().then((res) => {
            console.log("list:", res);
            done()
        });
        console.log(SerialPort.list())
    });
});

describe("serialport:port", () => {
    let port: any;

    beforeAll(() => {
        port = new SerialPort({ path: '/dev/tty.usbmodem141301', baudRate: 115200, autoOpen: true });

        port.on('data', (data: any) => {
            console.log('data: ', data);
            console.log('recv hex: ' + data.toString('hex'));
            console.log('recv ascii: ' + data.toString('ascii'));
        });
        port.on('close', () => {
            // console.log("close:");
        });
        port.on('disconnect', () => {
            console.log("disconnect:");
        });

        port.on('error', (err: any) => {
            console.log('error: ', err);
        });
    })

    it("demo:", () => {
        port.write(Buffer.from('abcd'));
        // let port = new SerialPort({ path: '/dev/tty.usbserial-14130', baudRate: 115200, autoOpen: true });
        // console.log(' this.serialport:', port);
        port.on('open', () => {
            //port.port.emitData('data')
            console.log("open:");
            port.write([0x61, 0x62, 0x63, 0x64]); //Buffer or Uint8Array
            // port.write(Buffer.from('abcd'));
            console.log("write end");
        });


        // port.close();
        return new Promise(res => {
            setTimeout(() => {
                port.close();
            }, 100);
            setTimeout(() => {
                res(1);
            }, 500);
        })

    });

});
*/