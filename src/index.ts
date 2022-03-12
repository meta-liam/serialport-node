const version = '0.0.1';

import MYSerialPort, { SerialPortList } from './myserialport';

let serialPorts: Map<string, MYSerialPort> = new Map();

function list() {
    return SerialPortList();
}

function createPort(option:any={ path: "COM1", baudRate: 115200, autoOpen: true },handle?:(data:any)=>void) {
    option.autoOpen = true;
    const p = new MYSerialPort(option)
    if (p && handle)p.listen(handle);
    if(p)serialPorts.set(option.path, p);
}

function write(path:string,arr:Array<number>){
    let p = serialPorts.get(path);
    if(p)p.write(Buffer.from(arr));
}

function close(path:string){
    let p = serialPorts.get(path);
    if(p)p.close();
}

function closeAllWorkers() {
    serialPorts.forEach((p:MYSerialPort) => {
        if(p)p.close()
    })
}

export default { closeAllWorkers, list,createPort ,write ,close,version};
module.exports = { closeAllWorkers, list,createPort ,write ,close,version};