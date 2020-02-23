import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-rendeles',
  templateUrl: './rendeles.component.html',
  styleUrls: ['./rendeles.component.css']
})

export class RendelesComponent {

  title = 'rendeles';

  constructor( private router: Router ) { }

  TermekListazas(){
    this.router.navigate(['rendeles/lista']);
    }
    TermekHozzaadasa(){
    localStorage.setItem('modositTermekekId','0');
    this.router.navigate(['rendeles/hozzaad']);
    }
}