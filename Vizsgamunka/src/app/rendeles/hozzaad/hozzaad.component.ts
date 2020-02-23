import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RendelesService } from '../service/rendeles.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-hozzaad',
  templateUrl: './hozzaad.component.html',
  styleUrls: ['./hozzaad.component.css']
})
export class HozzaadComponent implements OnInit {

  termekformlabel: string = 'Termék hozzáadása';
  termekformbtn: string = 'Mentés';
  
  constructor(private formBuilder: FormBuilder, private router: Router, private rendelesService: RendelesService) {
  }

  hozzaadForm: FormGroup;
  btnvisibility: boolean = true;

  ngOnInit() {
    this.hozzaadForm = this.formBuilder.group({
      id: [],
      szerzo_nev: ['', [Validators.required, Validators.minLength(3)]],
      termek_cim: ['', [Validators.required, Validators.minLength(3)]],
      ar: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    this.rendelesService.termekLetrehozasa(this.hozzaadForm.value)
      .subscribe(data => {
        this.router.navigate(['rendeles']);
      },
      error => {
        alert("HIBA! Jó sorszámot adott meg?");
      });
  }
}