import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $("#icon-menu-responsive").click(function(){
          $("#site").toggleClass('open-respon-menu');
      });
      $("#id1.dropbtn").click(function(){
          $(".dropdown-content").slideToggle();
      });
      $(window).resize(function(){
          if($(document).width() >= 768){
              $("#site").removeClass('open-respon-menu');
          }
      });
  })
  }

}
