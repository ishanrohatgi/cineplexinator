import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from '../service/movie-search.service';
import { MovieData } from '../movie.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: MovieData[] = [];
  trendingMovies: MovieData[] = [];
  movieSearchResult: MovieData[]=[];
  tabFocus:any;
  constructor(private readonly movieSearchService: MovieSearchService) {

  }


  ngOnInit() {
    setInterval(()=>{
      console.log(this.movieSearchResult);
      console.log(this.tabFocus);
    },100)
    this.movieSearchService.getTrendingMovies().subscribe((resp) => {
      this.trendingMovies = resp.Search;
    })
    this.movieSearchService.getPopularMovies().subscribe((resp) => {
      this.popularMovies = resp.Search;
    })
  }
  
}
