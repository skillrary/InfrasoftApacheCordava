import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private BASE_URL = 'http://localhost:9000';
  constructor() { }

  doSum(no1: number, no2: number): number {
    return no1 + no2;
  }
}
