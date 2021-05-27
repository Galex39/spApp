import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public data:any = {};
  constructor(private activatedRoute:ActivatedRoute, private heroe:HeroesService) { 
    this.activatedRoute.params.subscribe(param => {
      this.data = heroe.getHeroe(param['id']);
      console.log(this.data);
    });
    
  } 

  ngOnInit(): void {
  }

}
