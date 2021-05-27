import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  public heroes:Heroe[] = [];
  public termino:string = '';

  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.heroes = this.heroesService.searchHeroes(param['termino']);
      this.termino = param['termino'];
    });
  }

  // verHeroe(index:number){
  //   this.router.navigate(['heroes/heroe',index]);
  // }

}
