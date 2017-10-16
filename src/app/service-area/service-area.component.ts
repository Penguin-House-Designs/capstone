import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-area',
  templateUrl: './service-area.component.html',
  styleUrls: ['./service-area.component.css']
})
export class ServiceAreaComponent implements OnInit {

  constructor() { }

  title: string = 'My first AGM project';
  lat = 40.7608;
  lng = -111.8910;
  paths = [
    {lat: 41.302281, lng: -112.176590},
    {lat: 41.326005, lng: -111.886826},
    {lat: 41.165959, lng: -111.687698},
    {lat: 40.903880, lng: -111.538010},
    {lat: 40.505153, lng: -111.781082},
    {lat: 40.441427, lng: -111.952744},
    {lat: 40.653262, lng: -112.136765}
  ];

  ngOnInit() {

  }

}
