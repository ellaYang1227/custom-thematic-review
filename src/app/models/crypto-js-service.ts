import * as CryptoJS from 'crypto-js';

export class CryptoJsService {
    key: any;
    iv: any;

    constructor() {
        this.key = CryptoJS.SHA256('AAAAAAAAAA-BBBBB');
        this.iv = CryptoJS.MD5('ABCDEF1234123412');
    }

    // Base64 解密
    // decrypt(text: string): any {
    //     const textSplit = text.split('.');
    //     const decryptData = JSON.parse(CryptoJS.enc.Base64.parse(textSplit[1]).toString(CryptoJS.enc.Utf8));
    //     return decryptData;
    // }

    // AES 加密
    encrypt(data: any): string {
        return CryptoJS.AES.encrypt(JSON.stringify(data), this.key, { iv: this.iv }).toString();
    }

    // AES 解密
    decrypt(text: string): any {
        return JSON.parse(CryptoJS.AES.decrypt(text, this.key, { iv: this.iv }).toString(CryptoJS.enc.Utf8));
    }
}
