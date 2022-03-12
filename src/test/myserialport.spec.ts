import MySerialPort, { SerialPortList } from "../myserialport";
import { SerialPortMock } from 'serialport'


//https://serialport.io/docs/api-serialport#binding
describe("xserialport ext", () => {
    let mockPort: any;

    beforeAll(() => {
        const path = '/dev/example'
        SerialPortMock.binding.createPort(path)
        mockPort = new SerialPortMock({ path, baudRate: 115200 })
    })
    // jest.mock('serialport');

    it("close", () => {
        let port = new MySerialPort().close()
    });

    it("get port list", (done) => {
        SerialPortList().then((res) => {
            console.log("list:", res);
            expect(res).not.toEqual(null);
            done();
        });
    });

    it("open:1", () => {
        let _port = new MySerialPort({ path: '/dev/tty.usbmodem141101', baudRate: 115200, autoOpen: false })
        let v = _port.open()
        // console.log("1111:", _port.port);
        // expect(v).toEqual(true);
        let sendData = 'abcd';
        const buff = Buffer.from(sendData, "utf8");
        // _port.onWrite(buff);
        setTimeout(() => {
            _port.write(buff);
        }, 10);

        return new Promise(res => {
            setTimeout(() => {
                _port.close();
            }, 300);
            setTimeout(() => {
                res(1);
            }, 500);
        })
    });

    it("mock open", () => {
        // serialport.write('ROBOT POWER ON')
        let _port = new MySerialPort({ path: '/dev/tty.usbserial-14130', baudRate: 115200, autoOpen: false })
        expect(_port.open(mockPort)).toEqual(true);
    })

    it("mock open2", () => {
        // serialport.write('ROBOT POWER ON')
        // expect(_port.open(mockPort)).toEqual(true);
        mockPort.on('open', () => {

            mockPort.port.emitData('data');
            //console.log(v);
        })
    })

});