import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IMovie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  url:any;

  constructor(private http : HttpClient) { 
    this.url = 'https://api.themoviedb.org/3/discover/movie';
  }

  getMovies(){
    let params = {api_key : '6dd8a853c3a84bf12fd996d2057a4e95', with_original_language : 'en'};

    return this.http.get(this.url, {
      params: params
    });
  }

  getMoviesWithPageNum(pageNum : number){
    let params = {api_key : '6dd8a853c3a84bf12fd996d2057a4e95', with_original_language : 'en', page: pageNum};

    return this.http.get(this.url, {
      params: params
    });
  }

}
