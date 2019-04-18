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

  onSelect(): void {
    this.weatherService.getTemperature().subscribe(data => {

        this.temperature = (data['main'].temp);
        localStorage.setItem("temp", this.temperature)
    });
  }

}

