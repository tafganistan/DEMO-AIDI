import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ArticleBase } from '../models/article-base.models';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesListComponent implements OnInit {
  @Input() articleBase!: ArticleBase;
  articleBases!: ArticleBase[];

  constructor (private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {
    this.articleBases = this.articleService.getAllArticlesBases()
    this.router.navigateByUrl(`accueil/${this.articleBase.id}`);
  }
}
