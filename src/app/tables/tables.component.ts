import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Input, OnChanges, SimpleChange } from '@angular/core';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit,OnChanges {

  constructor(private httpClient: HttpClient) { }
  customerArray=[];
  @Input() major: any;
  @Input() otions: any;
  ngOnInit() {
   
  }
  ngOnChanges() {
    if(this.major === 'car'){
      this.customerArray=[];
    this.httpClient.get("./assets/car.json").subscribe((res:any) => {
this.customerArray=res.slice(0, this.otions);
console.log(this.customerArray,"this.customerArray");

    })
  }
  else{
    this.customerArray=[];
    this.httpClient.get("./assets/library.json").subscribe((res:any) => {
      this.customerArray=res.slice(0, this.otions);
      console.log(this.customerArray,"this.customerArray");
      
          })
   
  }
  }
}
