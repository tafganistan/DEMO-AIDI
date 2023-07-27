import { CategorieFourService } from './../services/categorie-four.service';
import { Router } from '@angular/router';
import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { ArticleBase } from '../models/article-base.models';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);


@Component({
  selector: 'app-articles-list-categorie-four',
  templateUrl: './articles-list-categorie-four.component.html',
  styleUrls: ['./articles-list-categorie-four.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesListCategorieFourComponent implements OnInit {

  @Input() articleBase!: ArticleBase;
  articleBases!: ArticleBase[];
  constructor (private router: Router, private categorieFourService: CategorieFourService) {}

  ngOnInit(): void {
    this.articleBases = this.categorieFourService.getAllArticlesBases()

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
  }
}
