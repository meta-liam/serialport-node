import { SerialPort } from 'serialport'

// const serialport = new SerialPort({ path: '/dev/example', baudRate: 9600 })
// serialport.write('ROBOT POWER ON')

// https://serialport.io/docs/
class MySerialPort {
    port: any;
    option: any;
    onHandler: (type: string, value: any) => void;
    constructor(option: any = { path: 'COM1', baudRate: 115200, autoOpen: false }) {
        this.option = option;
        if (this.option.autoOpen) {
            this.open()
        }
    }

    open(serialport: any = null): boolean {
        if (serialport) {
            this.port = serialport; //方便mock
            // this.bindEvent();
            console.log("open 1")
            return true;
        }
        if (this.port && this.port.opening) {
            console.log("open 2")
            return true; //已经存在
        }
        this.port = new SerialPort({ path: this.option.path, baudRate: this.option.baudRate, autoOpen: true });
        const res = this.port ? this.port.opening : false;
        this.bindEvent();
        return res;
    }

    bindEvent(): boolean {
        console.log("bindEvent")
        if (!this.port || !this.port.opening) return false;
        this.port.on('open', () => {
            console.log("open:", this.option.path);
            this.onHandler && this.onHandler('open', { open: true });
        });
        this.port.on('close', () => {
            this.onHandler && this.onHandler('close', { close: true })
        });
        this.port.on('disconnect', () => {
            console.log("disconnect:", this.option.path);
            this.onHandler && this.onHandler('disconnect', { disconnect: true });
        });

        this.port.on('error', (err: any) => {
            console.log("error:", err);
            this.onHandler && this.onHandler('error', { error: err })
        });
        this.port.on('data', (data: Buffer) => {
            console.log('data: ', data);
            this.onHandler && this.onHandler('data', data);
        });
        return true;
    }

    onWrite(buff: Buffer) {
        console.log("write buff :", buff);
        if (this.port) {
            this.port.write(buff, (err: any) => {
                this.onHandler && this.onHandler('write', { error: err });
            });
        }
    }

    onResponse(handle: (type: string, value: any) => void) {
        this.onHandler = handle;
    }

    onClose() {
        // console.log("close");
        this.port.close();
    }
}

export const SerialPortList = () => {
    return SerialPort.list();
}

export default MySerialPort;

