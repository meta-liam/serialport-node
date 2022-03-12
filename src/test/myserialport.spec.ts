import MySerialPort, { SerialPortList } from "../myserialport";
import { SerialPortMock } from 'serialport'


//https://serialport.io/docs/api-serialport#binding
describe("serialport:SerialPortList", () => {
    it("get port list", (done) => {
        SerialPortList().then((res) => {
            // console.log("list:", res);
            expect(res).not.toEqual(null);
            done();
        });
    });
});

describe("myserialport ext", () => {
    let mockPort: any;

    beforeAll(() => {
        const path = '/dev/example'
        SerialPortMock.binding.createPort(path)
        mockPort = new SerialPortMock({ path, baudRate: 115200 })
    });

    afterAll(()=>{
        return new Promise(res => {
            setTimeout(() => {
                mockPort.close();
                res(1);
            }, 300);
        })
    });

    // jest.mock('serialport');

    it("close:not call", () => {
        let _port = new MySerialPort();
        _port.close();
        expect(_port.port).not.toBeDefined();  
    });
    it("close:call", () => {
        let _port = new MySerialPort();  
        _port.open ( mockPort);
        _port.close();
        expect(_port.port).toBeDefined();
    });

    it("constructor:autoOpen false", () => {
        let _port = new MySerialPort();  
        expect(_port.port).not.toBeDefined();
    }); 
    
    it("constructor:autoOpen true", () => {
        let _port = new MySerialPort({ path: 'COM1', baudRate: 115200, autoOpen: true });  
        expect(_port.option.path).toEqual('COM1');
    });

    it("open:mockPort", () => {
        let _port = new MySerialPort();
        expect(_port.open(mockPort)).toEqual(true);
    });

    it("open:had port", () => {
        let _port = new MySerialPort();
        _port.port = mockPort;
        expect(_port.open()).toEqual(true);
    });

    it("open:new port 1", () => {
        let _port = new MySerialPort();
        _port.create = jest.fn();
        expect(_port.open()).toEqual(false);
    });

    it("open:new port 2", () => {
        let _port = new MySerialPort();
        _port.create = jest.fn(()=>{ return mockPort});
        expect(_port.open()).toEqual(true);
    });

    it("write:", () => {
        //{ path: '/dev/tty.usbmodem141101', baudRate: 115200, autoOpen: false }
        let _port = new MySerialPort();
        _port.listen(jest.fn());
        let v = _port.open(mockPort);
        let sendData = 'abcd';
        const buff = Buffer.from(sendData, "utf8");
        setTimeout(() => {
            _port.port.write = jest.fn();
            _port.write(buff);
            expect(_port.port.write).toHaveBeenCalled();
        }, 10);
        return new Promise(res => {
            setTimeout(() => {
                res(1);
            }, 500);
        })
    });

    

    it("listen:", () => {
        //{ path: '/dev/tty.usbmodem141101', baudRate: 115200, autoOpen: false }
        let _port = new MySerialPort();
        _port.listen((value)=>{
            if (value && value.type== 'open'){
                expect(value.data.open).toEqual(true);
            }
            // console.log("listen::",value);
        });
        let v = _port.open(mockPort);
        let sendData = 'abcd';
        const buff = Buffer.from(sendData, "utf8");
        setTimeout(() => {
            _port.write(buff);
        }, 10);
        return new Promise(res => {
            setTimeout(() => {
                res(1);
            }, 500);
        });
    });

});