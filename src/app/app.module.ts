import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

//Componets
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/shared/navbar/navbar.component';
import { HomeComponent } from './componets/home/home.component';
import { AboutComponent } from './componets/about/about.component';
import { HeroesComponent } from './componets/heroes/heroes.component';
import { HeroeComponent } from './componets/heroe/heroe.component';
import { BuscarComponent } from './componets/buscar/buscar.component';

//services
import {HeroesService} from './services/heroes.service';
import { TargetaHeroeComponent } from './componets/targeta-heroe/targeta-heroe.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/heroe/:id', component: HeroeComponent },
  { path: 'buscar/:termino', component: BuscarComponent },
  { path: '**', pathMatch: 'full',redirectTo:'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarComponent,
    TargetaHeroeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
