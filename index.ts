const version = '0.0.1';

import MYSerialPort, { SerialPortList } from './myserialport';

let serialPorts: Map<string, MYSerialPort> = new Map();

function list() {
    return SerialPortList();
}

function create(path: string) {
    const serialPort = new MYSerialPort()
    serialPorts.set(path, serialPort);
}

// function list(callback: (value: any) => void) {
//     return new Promise((_res, rej) => {
//         SerialPort.list().then((v) => {
//             if (callback) {
//                 callback(v);
//             }
//             _res(v)
//         }, () => {
//             if (callback) {
//                 callback("error");
//             }
//             rej("error")
//         }
//         );
//     });
// }

function onSessionClose() {
    console.log("close");
}
function closeAllWorkers() {
    console.log("close");
}

export default { version, onSessionClose, closeAllWorkers, list };
