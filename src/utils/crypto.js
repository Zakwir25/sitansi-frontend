// src/utils/crypto.js

import CryptoJS from 'crypto-js';


const LARAVEL_APP_KEY = 'base64:TFAeCtcCJhQtps/ZEBO7TSP+Rwp77eylh4T0zW+Q8XM=';

// Fungsi untuk Mendekode Kunci Base64 Laravel
const decodeBase64Key = (base64Key) => {

  const key = base64Key.replace('base64:', '');

  return CryptoJS.enc.Base64.parse(key);
};

const key = decodeBase64Key(LARAVEL_APP_KEY);

// Fungsi Enkripsi AES-256-CBC
export function encryptPayload(data) {

    const iv = CryptoJS.lib.WordArray.random(16); // 16 bytes for AES-CBC

    const encrypted = CryptoJS.AES.encrypt(data, key, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: iv
    });


    const encryptedString = encrypted.toString(); // Output format Base64

    return encryptedString;
}

