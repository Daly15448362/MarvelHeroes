import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Film }         from '../film';

import { FilmService } from '../film.service';
 
@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: [ './film-detail.component.css' ]
})
export class FilmDetailComponent implements OnInit {
  
  @Input() Film: Film;
 
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    this.getFilm();
  }
 
  getFilm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmService.getFilm(id)
      .subscribe(Film => this.Film = Film);
  }
 
  goBack(): void {
    this.location.back();
  }
 
 save(): void {
    this.filmService.updateFilm(this.Film)
      .subscribe(() => this.goBack());
  }
}