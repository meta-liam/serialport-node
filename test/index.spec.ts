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
            console.log("list:", res);
            expect(res).not.toEqual(null);
            done();
        });
    });



})