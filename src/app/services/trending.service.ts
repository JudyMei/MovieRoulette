import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  url:any;

  constructor(private http:HttpClient) { 
    this.url = "https://api.themoviedb.org/3/trending/movie/week?api_key=6dd8a853c3a84bf12fd996d2057a4e95";
  }

  getTrending(){
    return this.http.get(this.url);
  }
}
