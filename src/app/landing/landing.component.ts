import { Router } from '@angular/router';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
  constructor (private router: Router) {}

  OnAccueil() {
    this.router.navigateByUrl('accueil');
  }

  ngOnInit(): void {

  }
}
