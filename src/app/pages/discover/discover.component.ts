import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  
  movieList!:IMovie[];
  resultPageNum!:number;
  movieItem!:IMovie;
  showMovie:boolean = false;

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.showMovie = false;
  }

  getPageNumber(){
    this.moviesService.getMovies().subscribe((response : any) => {
      const numOfPages = response.total_pages;
      this.resultPageNum = this.getRandomInt(1, numOfPages + 1);
      // console.log(this.resultPageNum);
    })
  }

  getMovies(){
    this.getPageNumber();
    setTimeout(() => {
      this.moviesService.getMoviesWithPageNum(this.resultPageNum).subscribe((response : any) => {
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
    }, 2000);
    
  }

}
