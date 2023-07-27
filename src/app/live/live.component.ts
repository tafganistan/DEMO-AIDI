import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LiveComponent implements OnInit {

  ngOnInit(): void {
    $(".rti1-video").css("display", "block")
    /* NOTIFICATION INTERACTION */
    $(".alert-icon-bloc").click(function(){
      $(".alert-container").fadeIn(500)
      $(".alert-container").css("display", "flex")
      $(".slide-row_left").css("filter", "blur(5px)")
    });
    $(".close-alert").click(function(){
      $(".alert-container").fadeOut(500)
      $(".slide-row_left").css("filter", "blur()")
    });

    $(".rti1").click(function(){
      $(".videos").css("display", "none")
      $(".logo-ic").css("background", "rgba(255, 255, 255, .2)")
      $(".rti1").css("background", "rgba(247, 127, 0, .08)")
      $(".rti1-video").css("display", "block")
    });
    $(".rti2").click(function(){
      $(".videos").css("display", "none")
      $(".logo-ic").css("background", "rgba(255, 255, 255, .2)")
      $(".rti2").css("background", "rgba(247, 127, 0, .08)")
      $(".rti2-video").css("display", "block")
    });
    $(".rti3").click(function(){
      $(".videos").css("display", "none")
      $(".logo-ic").css("background", "rgba(255, 255, 255, .2)")
      $(".rti3").css("background", "rgba(247, 127, 0, .08)")
      $(".rti3-video").css("display", "block")
    });
    $(".radio-ci").click(function(){
      $(".videos").css("display", "none")
      $(".logo-ic").css("background", "rgba(255, 255, 255, .2)")
      $(".radio-ci").css("background", "rgba(247, 127, 0, .08)")
      $(".radio-ci-video").css("display", "block")
    });
    $(".nci").click(function(){
      $(".videos").css("display", "none")
      $(".logo-ic").css("background", "rgba(255, 255, 255, .2)")
      $(".nci").css("background", "rgba(247, 127, 0, .08)")
      $(".nci-video").css("display", "block")
    });
  }

}
