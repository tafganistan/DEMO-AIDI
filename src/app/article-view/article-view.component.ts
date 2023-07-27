import { ArticleService } from './../services/article.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ArticleBase } from '../models/article-base.models';
import { ActivatedRoute} from '@angular/router';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleViewComponent implements OnInit {

  @Input() articleBase!: ArticleBase;

  constructor (private articleService: ArticleService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const articleBaseId = +this.route.snapshot.params['id'];
    this.articleBase = this.articleService.getArticleBaseById(articleBaseId)
  }
}
