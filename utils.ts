
//abcd -> <Buffer 61 62 63 64>
export const string2Buff = (ab: string): Buffer => {
    // let v = new Uint8Array(ab);
    return Buffer.from(ab);
};

// <Buffer 61 62 63 64> -> [0x61 ,0x62 ,0x63, 0x64]
export const buff2Array = (buff: Buffer) => {
    return Array.prototype.slice.call(buff, 0);
};

//61626364 -> <Buffer 61 62 63 64>
export const hexString2Buff = (ab: string): Buffer => {
    return Buffer.from(ab, "hex")
};