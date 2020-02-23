import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-wakond',
  templateUrl: './wakond.component.html',
  styleUrls: ['./wakond.component.css']
})
export class WakondComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

}
