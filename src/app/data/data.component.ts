import { Component, OnInit } from '@angular/core';
import { Address } from 'cluster';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  Name:String;
  age:Number;
  Email="dhgjhf";
  address;
  hobbies:String[];
  constructor() {
    this.Name="arun" 
    this.age=38
    this.Email="arun@gmail.com"
    this.address={houseno:"adc354",street:"line45",district:"ktm"}
    this.hobbies=["reading","travelling"]
    
  }
  
  ngOnInit() {
  }

}
