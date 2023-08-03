import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {
  
  private API_KEY = '4ea7c327';
  private POPULAR_API_URL = `https://www.omdbapi.com/?apikey=${this.API_KEY}&s=popular`;
  private TRENDING_API_URL = `https://www.omdbapi.com/?apikey=${this.API_KEY}&s=trending`;
  constructor(private http: HttpClient) {}
  
  getTrendingMovies(){
    return this.http.get<any>(this.TRENDING_API_URL);
  }
  getPopularMovies(){
    return this.http.get<any>(this.POPULAR_API_URL);
  }

  getSearchedMovie(query:string){
    return this.http.get<any>(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${query}`);
  }
  
}

