import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service'
import { Info } from '../../model/congno'

@Component({
  selector: 'app-kd4b',
  templateUrl: './kd4b.component.html',
  styleUrls: ['./kd4b.component.css']
})
export class Kd4bComponent implements OnInit {
  outJson: any;
  _arrInfo: any = {};

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this._arrInfo["MA_DVIQLY"] = "";
    this._arrInfo["THANG"] = this.api.getMonth();
    this._arrInfo["NAM"] = this.api.getYear();

    console.log("output:", this._arrInfo);
    this.get();
  }
    
  
  async get() {
    // this.outJson = await this.api.get().toPromise();
    this.outJson = await (await this.api.getInfo(this._arrInfo)).toPromise();
  }
}
