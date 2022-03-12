import serial from "../index";

describe("serialport ext", () => {

    it("onSessionClose", () => {
        serial.onSessionClose();
        // console.log(serial);
    });

    it("closeAllWorkers", () => {
        serial.closeAllWorkers();
    });

    it("list", (done) => {
        serial.list().then((res) => {
            // console.log("list:", res);
            expect(res).not.toEqual(null);
            done();
        });
    });

    // it("createPort", (done) => {
    //    let handle =  (value:any)=>{
    //         if (value && value.type== 'open'){
    //             expect(value.data.open).toEqual(true);
    //         }
    //         console.log("listen::",value);
    //         done();
    //     };
    //     serial.createPort({ path: "", baudRate: 115200, autoOpen: true },handle);
    // });


})