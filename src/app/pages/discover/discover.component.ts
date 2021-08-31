import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IMovie } from 'src/app/interfaces/movie';
import { GenresService } from 'src/app/services/genres.service';
import { MovieProvidersService } from 'src/app/services/movie-providers.service';
import { MoviesService } from 'src/app/services/movies.service';
import { WatchProvidersService } from 'src/app/services/watch-providers.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  
  movieList!:IMovie[];
  resultPageNum!:number;
  movieItem!:IMovie;
  imgPath = "http://image.tmdb.org/t/p/w342";
  logoPath = "http://image.tmdb.org/t/p/w45";
  showMovie:boolean = false;
  genres = new Map();
  providers = new Map();
  movieProviders:any;

  constructor(private moviesService:MoviesService, private genreService:GenresService, private watchProviderService:WatchProvidersService, private movieProviderService:MovieProvidersService) { }

  ngOnInit(): void {
    this.showMovie = false;
    this.genres = this.genreService.getGenres();
    this.providers = this.watchProviderService.getWatchProviders();
  }

  getPageNumber(){
    this.moviesService.getMovies(this.paramsForm.value).subscribe((response : any) => {
      const numOfPages = response.total_pages;
      this.resultPageNum = this.getRandomInt(1, numOfPages + 1);
      // console.log(this.resultPageNum);
    })
  }

  getMovies(){
    this.getPageNumber();
    setTimeout(() => {
      this.moviesService.getMoviesWithPageNum(this.paramsForm.value, this.resultPageNum).subscribe((response : any) => {
        // console.log(this.resultPageNum);
        this.movieList = response.results
        console.log(this.movieList);
      })
    }, 1000);
  }

  getRandomInt(min: number, max: number) : number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  getMovie(){
    this.getMovies();
    setTimeout(() => {
      const index = this.getRandomInt(0, 20);
      this.movieItem = this.movieList[index];
      console.log(this.movieList[index])
      this.showMovie = true;
      this.getMovieProviders();
    }, 2000);
    // setTimeout(() => {
    //   this.getMovieProviders();
    // },2500)
    
  }

  getPosterPath(){
    return this.imgPath+this.movieItem.poster_path;
  }

  getLogoPath(path:string){
    return this.logoPath+path;
  }
  
  getMovieProviders(){
    this.movieProviderService.getMovieProviders(this.movieItem.id).subscribe((response : any) => {
      //provider region is defaulted to US for now
      this.movieProviders = response.results.US;
    })
  }

  close(){
    this.showMovie = !this.showMovie;
  }

  // Form Methods -------------------------------
  paramsForm = new FormGroup({
    genre: new FormControl('',[]),
    language: new FormControl('',[])
  })

  get genre(){
    return this.paramsForm.get("genre");
  }
  
  get language(){
    return this.paramsForm.get("language");
  }

  // Choose genre using select dropdown
  changeGenre(e : any) {
    this.genre?.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeLanguage(e : any) {
    this.language?.setValue(e.target.value, {
      onlySelf: true
    })
  }

  generate(){
    console.log(JSON.stringify(this.paramsForm.value))
  }

}
