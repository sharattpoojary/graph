import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  radioSelected:any='car'
  major:any={
    name:'car'
  };
  minor:any
  constructor(private httpClient: HttpClient) { }
  itemsList:any=[{
    value:'car',name:'car'
  },{
    value:'library',name:'library'
      }]
      summaries=["5", "4", "8" ]
  ngOnInit() {
    this.onItemChange(this.major)
  }
  onItemChange(item:any){
    this.major=item.name;
    console.log(item,"itemsss");

  }
  filterForeCasts(test:any){ 
    this.minor=test;
    console.log(test,"test");
  }
}
