const version = '0.0.1';

import MYSerialPort, { SerialPortList } from './myserialport';

let serialPorts: Map<string, MYSerialPort> = new Map();

function list() {
    return SerialPortList();
}

function createPort(option:any={ path: "COM1", baudRate: 115200, autoOpen: true },handle?:(data:any)=>void) {
    option.autoOpen = true;
    const p = new MYSerialPort(option)
    if (handle)p.listen(handle);
    serialPorts.set(option.path, p);
}

function write(path:string,arr:Array<number>){
    let p = serialPorts.get(path);
    p.write(Buffer.from(arr));
}

function onSessionClose() {
    serialPorts.forEach((p:MYSerialPort) => {
        p.close()
    })
    console.log("close");
}
function closeAllWorkers() {
    onSessionClose();
    console.log("close");
}

export default { onSessionClose, closeAllWorkers, list,createPort ,write ,version};
