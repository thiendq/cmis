import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import {jqxChartModule} from 'jqwidgets-ng/jqxchart'
import { from } from 'rxjs';

// @NgModule({
// imports:[BrowserModule,FormsModule,jqxChartModule]
// })

@Component({
  selector: 'app-char-power',
  templateUrl: './char-power.component.html',
  styleUrls: ['./char-power.component.css']
})
export class CharPowerComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  source: any = [
    { Date: '10/1/2014', Referral: 1308, SearchPaid: 1165, SearchNonPaid: 1453 },
    { Date: '10/2/2014', Referral: 1379, SearchPaid: 1439, SearchNonPaid: 1015 },
    { Date: '10/3/2014', Referral: 1026, SearchPaid: 1288, SearchNonPaid: 1282 },
    { Date: '10/4/2014', Referral: 1497, SearchPaid: 1063, SearchNonPaid: 1089 },
    { Date: '10/5/2014', Referral: 1153, SearchPaid: 1107, SearchNonPaid: 1051 },
    { Date: '10/6/2014', Referral: 1367, SearchPaid: 1351, SearchNonPaid: 1037 },
    { Date: '10/7/2014', Referral: 1243, SearchPaid: 1079, SearchNonPaid: 1139 },
    { Date: '10/8/2014', Referral: 1445, SearchPaid: 1187, SearchNonPaid: 1174 },
    { Date: '10/9/2014', Referral: 1495, SearchPaid: 1095, SearchNonPaid: 1192 },
    { Date: '10/10/2014', Referral: 1031, SearchPaid: 1441, SearchNonPaid: 1277 },
    { Date: '10/11/2014', Referral: 1061, SearchPaid: 1312, SearchNonPaid: 1122 },
    { Date: '10/12/2014', Referral: 1231, SearchPaid: 1382, SearchNonPaid: 1437 },
    { Date: '10/13/2014', Referral: 1069, SearchPaid: 1018, SearchNonPaid: 1180 },
    { Date: '10/14/2014', Referral: 1309, SearchPaid: 1358, SearchNonPaid: 1425 },
    { Date: '10/15/2014', Referral: 1161, SearchPaid: 1376, SearchNonPaid: 1017 },
    { Date: '10/16/2014', Referral: 1250, SearchPaid: 1401, SearchNonPaid: 1198 },
    { Date: '10/17/2014', Referral: 1235, SearchPaid: 1341, SearchNonPaid: 1114 },
    { Date: '10/18/2014', Referral: 1345, SearchPaid: 1089, SearchNonPaid: 1158 },
    { Date: '10/19/2014', Referral: 1487, SearchPaid: 1110, SearchNonPaid: 1382 },
    { Date: '10/20/2014', Referral: 1308, SearchPaid: 1165, SearchNonPaid: 1453 },
    { Date: '10/21/2014', Referral: 1326, SearchPaid: 1058, SearchNonPaid: 1140 },
    { Date: '10/22/2014', Referral: 1021, SearchPaid: 1176, SearchNonPaid: 1085 },
    { Date: '10/23/2014', Referral: 1219, SearchPaid: 1190, SearchNonPaid: 1233 },
    { Date: '10/24/2014', Referral: 1345, SearchPaid: 1057, SearchNonPaid: 1300 },
    { Date: '10/25/2014', Referral: 1283, SearchPaid: 1491, SearchNonPaid: 1273 },
    { Date: '10/26/2014', Referral: 1435, SearchPaid: 1483, SearchNonPaid: 1298 },
    { Date: '10/27/2014', Referral: 1097, SearchPaid: 1102, SearchNonPaid: 1022 },
    { Date: '10/28/2014', Referral: 1222, SearchPaid: 1218, SearchNonPaid: 1485 },
    { Date: '10/29/2014', Referral: 1270, SearchPaid: 1108, SearchNonPaid: 1180 },
    { Date: '10/30/2014', Referral: 1339, SearchPaid: 1372, SearchNonPaid: 1499 }
  ];
  //  {
  // Json

  // su dung bang file .txt
  // datatype: 'tab',
  // datafields: [
  //   { name: 'Date' },
  //   { name: 'Referral' },
  //   { name: 'SearchPaid' },
  //   { name: 'SearchNonPaid' }
  // ],
  // url: '../../assets/nasdaq.txt'
  //   url: './assets/nasdaq_vs_sp500.txt'
  //  };

  // dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });
  dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

  padding: any = { left: 10, top: 5, right: 10, bottom: 5 };
  titlePadding: any = { left: 50, top: 0, right: 0, bottom: 10 };

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '100%';
    }

    return 850;
  }

  xAxis: any =
    {
      dataField: 'Date',
      type: 'date',
      baseUnit: 'day',
      valuesOnTicks: false,
      labels:
      {
        formatFunction: (value: any): string => {
          console.log(value.getDate());
          return value.getDate();
        }
      },
      toolTipFormatFunction: (value: any): string => {
        return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
      }
    };

  valueAxis: any =
    {
      unitInterval: 500,
      minValue: 0,
      maxValue: 4500,
      labels: { horizontalAlignment: 'right' },
      title: { text: 'Daily Visits<br>' }
    };

  seriesGroups: any =
    [
      {
        type: 'stackedline',
        series: [
          { dataField: 'Referral', displayText: 'Referral Traffic' },
          { dataField: 'SearchPaid', displayText: 'Paid Search Traffic' },
          { dataField: 'SearchNonPaid', displayText: 'Organic Search Traffic' }
        ]
      }
    ];
}
