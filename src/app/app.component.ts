import { Component, OnInit } from '@angular/core';
import { myWeather } from './models/weather.model';
import { WeatherService } from './services/weather.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  myWeather : any;
  temperature: number =0; 
  min_temp:number =0;
  max_temp:number =0;
  humidity:number=0;
  wind :number =0;

  constructor(private weatherservice : WeatherService) { }

  cityname  : string ='pune';
  WeatherData ? :myWeather;

  ngOnInit(): void 
  {
   this.getweather(this.cityname);
   this.cityname='';
  }

  onSubmit(){
   this.getweather(this.cityname);
   this.cityname='';
  }

  private getweather(cityname :string){
    this.weatherservice.getweather(cityname)
    .subscribe
    ({
      next :(response) =>{
        this.myWeather =response;
        console.log(response);
      },
    })
  }
 
}
