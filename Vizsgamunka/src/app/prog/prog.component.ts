import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prog',
  templateUrl: './prog.component.html',
  styleUrls: ['./prog.component.css']
})
export class ProgComponent implements OnInit {

text:any = {
    Month: 'hónap-',
    Weeks: "hét-",
    Days: "nap-",
    Hours: "óra-",
    Minutes: "perc-",
    Seconds: "mperc",
  };

  constructor() { }

  ngOnInit() {
  }

}
