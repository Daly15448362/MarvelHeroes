import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { FilmDetailComponent }  from './film-detail/film-detail.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'films', component: FilmsComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule {}