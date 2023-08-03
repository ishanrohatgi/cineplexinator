import { Component,Input } from '@angular/core';
import { MovieData } from 'src/app/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movieData: any;
  constructor(){}

  
}
