import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';
import { myWeather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getweather(cityname :string)
  {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=557696b4064af47c17a61688609b2ad3&units=imperial`);
  }
  
}
