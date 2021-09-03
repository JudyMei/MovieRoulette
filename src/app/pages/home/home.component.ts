import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/services/trending.service';
import { ITrending } from 'src/app/interfaces/trending';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  trendingList !: ITrending[];
  showMovie !: boolean;
  imgPath = "http://image.tmdb.org/t/p/w185";
  cardImgPath = "http://image.tmdb.org/t/p/w342";
  movieItem !: ITrending;
  genres = new Map();

  constructor(private trendingService:TrendingService, private genreService:GenresService) { 
    this.trendingList = [];
  }

  ngOnInit(): void {
    this.trendingService.getTrending().subscribe((response:any) => {
      this.trendingList = response.results;
      // for (let i = 0; i < 6; i++){
      //   this.trendingList.push(response.results[i]);
      // }
    })
    this.showMovie = false;
    this.genres = this.genreService.getGenres();
  }

  getPosterPath(item : ITrending){
    return this.imgPath+item.poster_path;
  }

  getCardImgPath(item : ITrending){
    return this.cardImgPath+item.poster_path;
  }

  toggleCard(){
    this.showMovie = !this.showMovie;
  }

  movieInfo(obj : ITrending){
    this.movieItem = obj;
    this.showMovie = true;
  }



}
