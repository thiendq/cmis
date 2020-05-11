import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './components/main/main.component';
import {ReportComponent} from './components/report/report.component';
import {Kd4aComponent} from './components/kd4a/kd4a.component';
import {Kd4bComponent} from './components/kd4b/kd4b.component'
import {CharPowerComponent} from './components/char-power/char-power.component'
import {GridComponent} from './components/usercontrols/grid/grid.component'

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {path:'main', component:MainComponent},
  {path:'report', component:ReportComponent},
  {path: 'kd4a', component:Kd4aComponent},
  {path: 'kd4b', component:Kd4bComponent},
  {path: 'charpower', component:CharPowerComponent},
  {path: 'Grid', component:GridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
