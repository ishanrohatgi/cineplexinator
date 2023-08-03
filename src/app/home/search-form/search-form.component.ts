import { Component, EventEmitter, Output, DoCheck, ViewChild,ElementRef,OnInit } from '@angular/core';
import { MovieData } from 'src/app/movie.model';
import { MovieSearchService } from 'src/app/service/movie-search.service';
import { debounceTime, distinctUntilChanged, from, fromEvent } from 'rxjs';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements DoCheck, OnInit{
  @ViewChild('searchInput', {static:true}) searchInput: any;
   @Output() tabFocus: EventEmitter<Number> = new EventEmitter();
   @Output() searchData: EventEmitter<MovieData[]> = new EventEmitter();
   searched:string='';
   movieSearchResult: MovieData[]=[];
   constructor(private readonly movieSearchService: MovieSearchService){}
   ngOnInit(){
    const inputObservable = fromEvent(this.searchInput.nativeElement,'input');
    inputObservable.pipe(debounceTime(500),distinctUntilChanged()).subscribe(()=>{
      this.onChangeHandler();
    })
   }
   ngDoCheck(){
       if(this.searched.length===0){
        this.tabFocus.emit(0);
        this.movieSearchResult.length=0;
       }
   }
   onChangeHandler(){
    if(this.searched.length>0){
      this.movieSearchService.getSearchedMovie(this.searched).subscribe((resp)=>{
        this.movieSearchResult = resp.Search;
        this.searchData.emit(this.movieSearchResult);
        this.tabFocus.emit(2);
      })
  
    }
   }
}
