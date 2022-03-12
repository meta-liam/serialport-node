import { string2Buff, buff2Array, hexString2Buff,array2Buff } from '../utils'

describe("exe.utils", () => {

    it("string2buff", () => {
        const st = 'abcd';
        const res = string2Buff(st); //<Buffer 61 62 63 64>
        expect(res[0]).toEqual(97);
        //console.log(res[0]);
    });

    it("buff2string", () => {
        const st = 'abcd';
        const cv = string2Buff(st); //<Buffer 61 62 63 64>
        const res = buff2Array(cv); // [ 97, 98, 99, 100 ]
        expect(res[0]).toEqual(97);
        //console.log(res);
    });

    it("hexString2Buff", () => {
        const st = '61626364';//abcds
        const res = hexString2Buff(st); //<Buffer 61 62 63 64>
        expect(res[0]).toEqual(97);
        //console.log(res);
    });

    it("array2Buff", () => {
        const st = 'abcd';
        const cv = string2Buff(st); //<Buffer 61 62 63 64>
        const arr = buff2Array(cv); // [ 97, 98, 99, 100 ]
        const res = array2Buff(arr); // <Buffer 61 62 63 64>
        expect(res[0]).toEqual(97);
        //console.log(res);
    });

});
