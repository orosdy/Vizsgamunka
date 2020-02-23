import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RendelesService } from '../service/rendeles.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-modosit',
  templateUrl: './modosit.component.html',
  styleUrls: ['./modosit.component.css']
})
export class ModositComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private rendelesService: RendelesService) { }
  modositasForm: FormGroup;

  ngOnInit() {
    this.modositasForm = this.formBuilder.group({
      id: [],
      szerzo_nev: [''],
      termek_cim: [''],
      ar: ['']
    });
    let termekid = localStorage.getItem('modositTermekekId');
    this.rendelesService.getTermekById(+termekid).subscribe(data => {
      this.modositasForm.setValue(data);
    })
  }

  onSubmit() {
    this.rendelesService.modositasTermek(this.modositasForm.value).subscribe(data => {
          this.router.navigate(['rendeles']);
        },
        error => {
          alert(error);
        });
  }
  
}