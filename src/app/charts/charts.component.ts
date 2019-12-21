import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import {Input, OnChanges, SimpleChange } from '@angular/core';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit,OnChanges {

  constructor(private httpClient: HttpClient) {}
  url = 'http://localhost:4000/results';
  Name = [];
  count = [];
  chart = [];
  ngOnInit() {
   

  }
  @Input() major: any;
  @Input() otions: any;
  ngOnChanges() {
    alert(12333);
    if(this.major === 'car'){
      // this.chart = [];
      this.Name = [];
      this.count = [];
      this.httpClient.get("./assets/car.json").subscribe((res:any) => {
        res.forEach(y => {
          this.Name.push(y.Name);
          this.count.push(y.count);
        });
        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.Name.slice(0, this.otions),
            datasets: [
              {
                data: this.count.slice(0, this.otions),
                borderColor: '#3cba9f',
                backgroundColor:'red',
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });
      });
    }
    else{
      
      this.Name = [];
      this.count = [];
      this.httpClient.get("./assets/library.json").subscribe((res:any) => {
        res.forEach(y => {
          this.Name.push(y.title);
          this.count.push(y.count);
        });
        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.Name.slice(0, this.otions),
            datasets: [
              {
                data: this.count.slice(0, this.otions),
                borderColor: '#3cba9f',
                backgroundColor:'red',
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });
      });
    }

  }

}
