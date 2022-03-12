import { SerialPort } from 'serialport'

// https://serialport.io/docs/
class MySerialPort {
    port: any;
    option: any;
    onHandler: ({type: string, data: any}) => void;
    constructor(option: any = { path: 'COM1', baudRate: 115200, autoOpen: false }) {
        this.option = option;
        if (this.option.autoOpen) {
            this.open()
        }
    }

    open(serialport: any = null): boolean {
        if (serialport) {
            this.port = serialport; //方便mock
            this.bindEvent();
            console.log("open 1")
            return true;
        }
        if (this.port && this.port.opening) {
            console.log("open 2");
            this.bindEvent();
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
            this._onHandler && this._onHandler('open', { open: true });
        });
        this.port.on('close', () => {
            this._onHandler && this._onHandler('close', { close: true })
        });
        this.port.on('disconnect', () => {
            console.log("disconnect:", this.option.path);
            this._onHandler && this._onHandler('disconnect', { disconnect: true });
        });

        this.port.on('error', (err: any) => {
            console.log("error:", err);
            this._onHandler && this._onHandler('error', { error: err })
        });
        this.port.on('data', (data: Buffer) => {
            console.log('data: ', data);
            this._onHandler && this._onHandler('data', data);
        });
        return true;
    }

    write(buff: Buffer) {
        console.log("write buff :", buff);
        if (this.port) {
            this.port.write(buff, (err: any) => {
                this._onHandler && this._onHandler('write', { error: err });
            });
        }
    }
    _onHandler(type: string, data: any){
        if (this.onHandler) {
            this.onHandler({type,data})
        }
    }

    listen(handle: ({type:string, data: any}) => void) {
        this.onHandler = handle;
    }

    close() {
        // console.log("close");
        this.port.close();
    }
}

export const SerialPortList = () => {
    return SerialPort.list();
}

export default MySerialPort;

