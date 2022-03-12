const version = '0.0.1';

import MYSerialPort, { SerialPortList } from './myserialport';

let serialPorts: Map<string, MYSerialPort> = new Map();

function list() {
    return SerialPortList();
}

function createPort(path: string) {
    const serialPort = new MYSerialPort()
    serialPorts.set(path, serialPort);
}



function onSessionClose() {
    console.log("close");
}
function closeAllWorkers() {
    console.log("close");
}

export default { version, onSessionClose, closeAllWorkers, list };
