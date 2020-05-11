import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { NgModule,Type,ModuleWithProviders } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DemoMaterialModule} from './material-module'

import { ReportComponent } from './components/report/report.component';
import { MainComponent,dialogthongbaotComponent } from './components/main/main.component';
import { Kd4aComponent } from './components/kd4a/kd4a.component';
import { Kd4bComponent } from './components/kd4b/kd4b.component';

import { CharPowerComponent } from './components/char-power/char-power.component';
import {jqxChartModule} from 'jqwidgets-ng/jqxchart';
import {GridComponent}  from './components/usercontrols/grid/grid.component'


// import { from } from 'rxjs';
const components: any[] | Type<any> | ModuleWithProviders<{}> = [DemoMaterialModule];

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    MainComponent,dialogthongbaotComponent,
    Kd4aComponent,
    CharPowerComponent,
    Kd4bComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    components,
    AppRoutingModule,
    BrowserAnimationsModule,jqxChartModule,CommonModule,
    HttpClientModule
  ],
  entryComponents:[MainComponent,dialogthongbaotComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
