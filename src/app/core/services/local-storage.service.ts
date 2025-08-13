import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  readonly #key: string = 'ConvergeICT';

  saveData(key: string, value: string): void {
    localStorage.setItem(key, this.#encrypt(value));
  }

  getData(key: string): string {
    const data = localStorage.getItem(key) || '';
    return this.#decrypt(data);
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }

  clearData(): void {
    localStorage.clear();
  }

  #encrypt(text: string): string {
    return CryptoJS.AES.encrypt(text, this.#key).toString();
  }

  #decrypt(textToDecrypt: string): string {
    return CryptoJS.AES.decrypt(textToDecrypt, this.#key).toString(
      CryptoJS.enc.Utf8,
    );
  }
}
