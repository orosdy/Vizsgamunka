import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-halottugyek',
  templateUrl: './halottugyek.component.html',
  styleUrls: ['./halottugyek.component.css']
})
export class HalottugyekComponent implements OnInit {

  slides: string [] = [ "../assets/images/carousel/halott_ugyek_fv_gvel-page-001aa.jpg", 
    "../assets/images/carousel/halott_ugyek_fv_gvel-page-001bb.jpg", 
    "../assets/images/carousel/halott_ugyek_fv_gvel-page-001cc.jpg", 
    "../assets/images/carousel/halott_ugyek_fv_gvel-page-001dd.jpg", 
    "../assets/images/carousel/halott_ugyek_fv_gvel-page-001ee.jpg",
    "../assets/images/carousel/halott_ugyek_fv_gvel-page-001ff.jpg" ]
    i=0;
  
      getSlide() {
          return this.slides[this.i];
      }
  
      getPrev() {
          this.i = this.i===0 ? 0 : this.i - 1;
      }
   
      getNext() {
          this.i = this.i===5 ? this.i : this.i + 1;
      }

  constructor( private router: Router ) { }

  ngOnInit() {
  }

}
