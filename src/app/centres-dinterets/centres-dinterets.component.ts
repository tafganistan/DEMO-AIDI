import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

// install Swiper modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, FreeMode]);


@Component({
  selector: 'app-centres-dinterets',
  templateUrl: './centres-dinterets.component.html',
  styleUrls: ['./centres-dinterets.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CentresDinteretsComponent implements OnInit {
  constructor (private router: Router ) {}

  OnLanding() {
    this.router.navigateByUrl('landing');
  }

  ngOnInit(): void {
    $(document).ready(function () {
      $(".rw-bloc-interest").fadeIn(2000)
      $("input").on({
        mouseenter: function(){
          $(this).css({"-webkit-box-shadow": "0", "box-shadow": "none"});
        },
        mouseleave: function(){
          $(this).css({"-webkit-box-shadow": "0", "box-shadow": "none"});
        }
      });
      $(".close-alert").click(function(){
        $(".alert-container").css("display", "none")
        $(".container-bloc-interest").css("filter", "blur()")
      });
    })
  }
}
