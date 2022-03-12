export const SerialPort = {
    opening: false,
    open: jest.fn(() => { return true }),
    list: jest.fn(async () => {
        return [];
    }),
    binding: jest.fn(() => { return { list: {}, open: {} } }),
};
// export default MockSerialPort;

// class MockSerialPort {
//     opening: boolean
//     constructor(option: any = { path: 'COM1', baudRate: 115200, autoOpen: false }) {
//         if (option.autoOpen) {
//             this.opening = true;
//         } else {
//             this.opening = false;
//         }
//     }
//     // let serialport: any = (option: any = { path: 'COM1', baudRate: 115200, autoOpen: false }) => {
//     //     if (option.autoOpen) {
//     //         serialport.
//     //     }
//     //  };
// }

// export default MockSerialPort;