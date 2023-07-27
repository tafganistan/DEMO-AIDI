import { CategorieFiveService } from './../services/categorie-five.service';
import { Router } from '@angular/router';
import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { ArticleBase } from '../models/article-base.models';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-articles-list-categorie-five',
  templateUrl: './articles-list-categorie-five.component.html',
  styleUrls: ['./articles-list-categorie-five.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesListCategorieFiveComponent implements OnInit {

  @Input() articleBase!: ArticleBase;
  articleBases!: ArticleBase[];
  constructor (private router: Router, private categorieFiveService: CategorieFiveService) {}

  ngOnInit(): void {
    this.articleBases = this.categorieFiveService.getAllArticlesBases()

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
