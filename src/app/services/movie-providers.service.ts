import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieProvidersService {

  url!:string;

  constructor(private http : HttpClient) { 
    // this.url = 'https://api.themoviedb.org/3/movie/';
  }

  getMovieProviders(movie_id : number){
    this.url = 'https://api.themoviedb.org/3/movie/'+movie_id.toString()+'/watch/providers?api_key=6dd8a853c3a84bf12fd996d2057a4e95';
    return this.http.get(this.url);
  }
}
