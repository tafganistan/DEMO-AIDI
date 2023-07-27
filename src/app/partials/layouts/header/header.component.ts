import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor (private router: Router) {}

  ngOnInit(): void {
    /* AFFICHAGE ET DISPARITION DU MENU DE LA PAGE */
    $(".btn-setting").click(function(){
      $(".row-menu-categorie").css("display", "none")
      $(".cover-bloc").removeClass("animate__fadeOut")
      $(".cover-bloc").fadeIn(1500)
      $(".cover-bloc").css("display", "flex")
      $(".swiper-slide-active").css("filter","blur(3px)")
      $(".swiper-general > .swiper-button-prev").fadeOut(1000)
      $(".swiper-general > .swiper-button-next").fadeOut(1000)
      $(".row-menu").css("display", "")
      $(".rw-bloc-search-engine").css("filter", "blur(5px)")
      $(".container-bloc-profil").css("filter", "blur(15px)")
      $(".container-bloc-live").css("filter", "blur(5px)")
    });
    /* Pour mobile */
    $(".navbar-toggler").click(function(){
      $(".row-menu-categorie").css("display", "none")
      $(".cover-bloc").removeClass("animate__fadeOut")
      $(".cover-bloc").fadeIn(1500)
      $(".cover-bloc").css("display", "flex")
      $(".swiper-slide-active").css("filter","blur(3px)")
      $(".swiper-general > .swiper-button-prev").fadeOut(1000)
      $(".swiper-general > .swiper-button-next").fadeOut(1000)
      $(".row-menu").css("display", "")
      $(".rw-bloc-search-engine").css("filter", "blur(5px)")
      $(".container-bloc-profil").css("filter", "blur(15px)")
    });

    $(".close-cover").click(function(){
      $(".cover-bloc").addClass("animate__fadeOut")
      $(".cover-bloc").fadeOut(1000)
      $(".swiper-slide-active").css("filter","")
      $(".swiper-general > .swiper-button-prev").fadeIn(1000)
      $(".swiper-general > .swiper-button-next").fadeIn(1000)
      $(".rw-bloc-search-engine").css("filter", "")
      $(".container-bloc-profil").css("filter", "")
      $(".container-bloc-live").css("filter", "")
    });


    /* AFFICHAGE ET DISPARITION DU MENU DES CATEGORIES */
    $(".btn-categories").click(function(){
      $(".row-menu").css("display", "none")
      $(".cover-bloc").removeClass("animate__fadeOut")
      $(".cover-bloc").fadeIn(1500)
      $(".cover-bloc").css("display", "flex")
      $(".swiper-slide-active").css("filter","blur(3px)")
      $(".swiper-general > .swiper-button-prev").fadeOut(1000)
      $(".swiper-general > .swiper-button-next").fadeOut(1000)
      $(".row-menu-categorie").css("display", "flex")
      $(".rw-bloc-search-engine").css("filter", "blur(5px)")
      $(".container-bloc-profil").css("filter", "blur(15px)")
      $(".container-bloc-live").css("filter", "blur(5px)")
    });

    /* NOTIFICATION INTERACTION */
    $(".alert-icon-bloc").click(function(){
      $(".alert-container").fadeIn(500)
      $(".alert-container").css("display", "flex")
    });
    $(".close-alert").click(function(){
      $(".alert-container").fadeOut(500)
    });
  }

}
