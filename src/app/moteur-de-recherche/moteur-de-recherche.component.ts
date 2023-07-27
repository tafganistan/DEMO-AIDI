import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
declare var $: any;

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);


@Component({
  selector: 'app-moteur-de-recherche',
  templateUrl: './moteur-de-recherche.component.html',
  styleUrls: ['./moteur-de-recherche.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoteurDeRechercheComponent implements OnInit {

    ngOnInit(): void {
      $(".bi-search").click(function(){
        $(".default-bloc").css("display", "none")
        $(".swiper-moteur-de-recherche").css("display", "flex")
        $(".swiper-moteur-de-recherche").fadeIn(3000)

      });

      $(".svg2").click(function(){
        $(".default-bloc").css("display", "none")
        $(".svg2").css("display", "none")
        $(".svg1").css("display", "block")
        $(".article-interne-bloc").addClass("animate__fadeOut")
        $(".article-interne-bloc").css("display", "none")
        $(".article-externe-bloc").removeClass("animate__fadeOut")
        $(".article-externe-bloc").fadeIn(1500)
        $(".article-externe-bloc").css("display", "block")
      });
    }

}
