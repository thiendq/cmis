import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kd4a',
  templateUrl: './kd4a.component.html',
  styleUrls: ['./kd4a.component.css']
})
export class Kd4aComponent implements OnInit {
  outJson: any;
  js: any = {};
  subscribeResult: any = {};
  asyncResult: any = {};
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // this.api.get().subscribe((data)=>{
    //   this.js=data;
    //   console.log(this.js);
    // })

    this.js["MA_DVIQLY"] = "PB0401";
    this.js["MA_SOGCS"] = "A01003-05";
    this.js["TEN_SOGCS"] = "TEN_SOGCS";

    // this.api.getDSkhangNo(this.js).subscribe((data) => {
    //   this.subscribeResult = data;
    //   console.log('Subscribe executed.');
    // });
    // this.asyncResult = await
  
  //  this.getasyncData();
    this.get();
  }
  async get() {
    this.outJson = await this.api.get().toPromise();
    console.log('No issues, I will wait until promise is resolved..');
    console.log(this.outJson);
  }
  async getasyncData() {
    this.asyncResult = await(await this.api.getDSkhangNo(this.js)).toPromise();
    document.body.style.cursor = 'wait';
    console.log('No issues, I will wait until promise is resolved..');
    
    document.body.style.cursor = 'default';
  }
} 
