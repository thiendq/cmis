import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, Info } from './model/congno'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // -- Bien moi truong --
  thang = '4';
  nam = '2020';

  public strThang = new BehaviorSubject(this.thang);
  currenThang = this.strThang.asObservable();

  public strNam = new BehaviorSubject(this.nam);
  currenNam = this.strNam.asObservable();

  // -- Service --
  // test --> npm start
  // apiURL = "/api";
  apiURL = "https://cmis.binhduong.vn/CMIS/api"
  constructor(private http: HttpClient) { }
  httpOtions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' }) }
  public get() { return this.http.get(`${this.apiURL}/testApiLinq`); }
  public async getDSkhangNo(elements: User) { return this.http.post(`${this.apiURL}/Noquahan/`, elements, this.httpOtions) }
  public async getInfo(elements: Info) { return this.http.post(`${this.apiURL}/testApiLinq`, elements, this.httpOtions) }
 
  // --

  public getMonth(): string {
    this.currenThang.subscribe(Message => this.thang = Message);
    // this.currenNam.subscribe(Message=>this._nam=Message);
    return this.thang;
  }
  public getYear(): string {
    this.currenNam.subscribe(Message => this.nam = Message);
    // this.currenNam.subscribe(Message=>this._nam=Message);
    return this.nam;
  }
  public setMonth(message: string): void {
    this.strThang.next(message);
  }
  public setYear(message: string): void {
    this.strNam.next(message);
  }
}
