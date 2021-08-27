import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  
  url:any;
  genres = new Map();

  constructor( private http:HttpClient) { 
    this.url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=6dd8a853c3a84bf12fd996d2057a4e95&language=en-US'
  }

  getGenres(){
    this.http.get(this.url).subscribe((response : any) => {
      const objList = response.genres;
      for(var obj of objList){
        this.genres.set(obj.id, obj.name);
      }
    });
    return this.genres;
  }

}
