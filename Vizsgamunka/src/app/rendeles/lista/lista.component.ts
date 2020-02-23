import { Component, OnInit } from '@angular/core';
import { RendelesService } from '../service/rendeles.service';
import { Termekek } from '../model/rendeles.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public popoverTitle: string = 'Biztosan törölni kívánja?';
  public popoverMessage: string = 'A művelet nem vonható vissza!';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  termekek: Termekek[];

  constructor(private rendelesService: RendelesService, private router: Router ) { }

  ngOnInit() {
    this.rendelesService.getTermekek()
      .subscribe((data: Termekek[]) => {
        this.termekek = data;
      });
  }

  torlesTermek(termek: Termekek): void {
    this.rendelesService.torlesTermekek(termek.id)
      .subscribe(data => {
        this.termekek = this.termekek.filter(u => u !== termek);
      })
  }

  modositTermek(termek: Termekek): void {
    localStorage.removeItem('modositTermekekId');
    localStorage.setItem('modositTermekekId', termek.id.toString());
    this.router.navigate(['rendeles/modosit']);
  }
  
}