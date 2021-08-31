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

  getMovies(searchInfo : any){
    let params = new HttpParams()
    params = params.set('api_key', '6dd8a853c3a84bf12fd996d2057a4e95');
    params = params.set('with_original_language', 'en');
    if(searchInfo.genre !== ""){
      params = params.set('with_genres', searchInfo.genre);
    }
    // let params = {api_key : '6dd8a853c3a84bf12fd996d2057a4e95', with_original_language : 'en'};

    return this.http.get(this.url, {
      params: params
    });
  }

  getMoviesWithPageNum(searchInfo : any, pageNum : number){
    // let params = {api_key : '6dd8a853c3a84bf12fd996d2057a4e95', with_original_language : 'en', page: pageNum};
    let params = new HttpParams()
    params = params.set('api_key', '6dd8a853c3a84bf12fd996d2057a4e95');
    params = params.set('with_original_language', 'en');
    params = params.set('page', pageNum);
    if(searchInfo.genre !== ""){
      params = params.set('with_genres', searchInfo.genre);
    }

    return this.http.get(this.url, {
      params: params
    });
  }

}
