import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _httpClient: HttpClient) { }


  getDrList(): Observable<any> {
    return this._httpClient.get('http://localhost:3000/drlist').pipe(map((result: any) => { return result }))


  }

  getDeliveryReceipt(): Observable<any> {
    return this._httpClient.get('http://localhost:3000/deliveryreceipt').pipe(map((result: any) => { return result }))

  }
  getReturn(): Observable<any> {
    return this._httpClient.get('http://localhost:3000/return').pipe(map((result: any) => { return result }))

  }
  getReturnList(): Observable<any> {
    return this._httpClient.get('http://localhost:3000/returnlist').pipe(map((result: any) => { return result }))


  }


}
