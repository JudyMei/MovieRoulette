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
  
    if(searchInfo.genre !== ""){
      params = params.set('with_genres', searchInfo.genre);
    }
    if(searchInfo.language !== ""){
      params = params.set('with_original_language', searchInfo.language);
    } else{
      params = params.set('with_original_language', 'en');
    }
    if(searchInfo.rating !== ""){
      params = params.set('vote_average.gte', searchInfo.rating);
    }
    if(searchInfo.available !== ""){
      params = params.set('with_watch_providers', searchInfo.available);
    }
    if(searchInfo.region !== ""){
      params = params.set('watch_region', searchInfo.region);
    } else{
      params = params.set('watch_region', 'US');
    }

    return this.http.get(this.url, {
      params: params
    });
  }

  getMoviesWithPageNum(searchInfo : any, pageNum : number){
    let params = new HttpParams()
    params = params.set('api_key', '6dd8a853c3a84bf12fd996d2057a4e95');
    params = params.set('page', pageNum);

    if(searchInfo.genre !== ""){
      params = params.set('with_genres', searchInfo.genre);
    }
    if(searchInfo.language !== ""){
      params = params.set('with_original_language', searchInfo.language);
    } else{
      params = params.set('with_original_language', 'en');
    }
    if(searchInfo.rating !== ""){
      params = params.set('vote_average.gte', searchInfo.rating);
    }
    if(searchInfo.available !== ""){
      params = params.set('with_watch_providers', searchInfo.available);
    }
    if(searchInfo.region !== ""){
      params = params.set('watch_region', searchInfo.region);
    } else{
      params = params.set('watch_region', 'US');
    }

    return this.http.get(this.url, {
      params: params
    });
  }

}
