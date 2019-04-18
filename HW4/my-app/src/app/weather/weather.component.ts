import { Component, OnInit } from '@angular/core';
import {WeatherServiceService} from '../weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherServiceService) { }
  temperature = localStorage.getItem('temp');

  ngOnInit() {
  }
  // ppb = localStorage.getItem("ppb");

  onSelect(): void {
    this.weatherService.getPollutants().subscribe(data => {

        // console.log(data['main'].temp)
        this.temperature = (data['main'].temp);
        localStorage.setItem("temp", this.temperature)

        // this.ppb = (data['response']['0']['periods']['0']['pollutants']['0']['valuePPB']);
        // localStorage.setItem("ppb", this.ppb)
        console.log(data['response'])
    });
  }

}

