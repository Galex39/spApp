import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-targeta-heroe',
  templateUrl: './targeta-heroe.component.html',
  styleUrls: ['./targeta-heroe.component.css']
})
export class TargetaHeroeComponent implements OnInit {

  @Input() public heroe:any = [];
  @Input() public index:any = 0;
  @Output() heroeSeleccionado:EventEmitter<number>;

  constructor(private router:Router) {
    this.heroeSeleccionado = new EventEmitter;
  }

  ngOnInit(): void {
  }

  verHeroe(){
    this.router.navigate(['heroes/heroe',this.index]);
  }

}
