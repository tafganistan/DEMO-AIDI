import { ArticleBase } from './../models/article-base.models';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
declare var $: any;

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {

  @Input() articleBase!: ArticleBase;
  articleBases!: ArticleBase[];
  constructor (private articleService: ArticleService, private router: Router ) {}

  ngOnInit(): void {
    this.articleBases = this.articleService.getAllArticlesBases()

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

  onViewArticleBase() {
    this.articleBases = this.articleService.getAllArticlesBases()
    this.router.navigateByUrl(`accueil/${this.articleBase.id}`);
  }

}
