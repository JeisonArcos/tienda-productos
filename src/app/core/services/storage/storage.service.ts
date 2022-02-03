import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveData(key: string, data: any) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  }
  getData(key: string): any {
    const data = localStorage.getItem(key);
    if (data != null) {
      return JSON.parse(data);
    }
    return null;
  }

}
