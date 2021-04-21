import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  apiURL: string = 'https://yudiz-solution.s3.ap-south-1.amazonaws.com/dishes.json';

  constructor(private httpClient: HttpClient) { }

  public fetchData() {
    return this.httpClient.get<any>(`${this.apiURL}`); // cors errror
  }
}
