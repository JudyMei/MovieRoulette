import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WatchProvidersService {

  url:any;
  providers = new Map();

  constructor(private http:HttpClient) { 
    this.url = 'https://api.themoviedb.org/3/watch/providers/movie?api_key=6dd8a853c3a84bf12fd996d2057a4e95'
  }

  getWatchProviders(){
    let params = {language : 'en-US'};

    this.http.get(this.url, {
      params: params
    }).subscribe((response:any) => {
      const objList = response.results;
      for(var obj of objList){
        this.providers.set(obj.provider_id, obj)
      }
    });
    return this.providers;
  }
}
