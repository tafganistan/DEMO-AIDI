import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/layouts/header/header.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesListCategorieOneComponent } from './articles-list-categorie-one/articles-list-categorie-one.component';
import { ArticlesListCategorieTwoComponent } from './articles-list-categorie-two/articles-list-categorie-two.component';
import { ArticlesListCategorieThreeComponent } from './articles-list-categorie-three/articles-list-categorie-three.component';
import { ArticlesListCategorieFourComponent } from './articles-list-categorie-four/articles-list-categorie-four.component';
import { ArticlesListCategorieFiveComponent } from './articles-list-categorie-five/articles-list-categorie-five.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CentresDinteretsComponent } from './centres-dinterets/centres-dinterets.component';
import { LandingComponent } from './landing/landing.component';
import { ProfilComponent } from './profil/profil.component';
import { LiveComponent } from './live/live.component';
import { MoteurDeRechercheComponent } from './moteur-de-recherche/moteur-de-recherche.component';
import { ArticleOneComponent } from './article-one/article-one.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleComponent,
    ArticlesListComponent,
    ArticlesListCategorieOneComponent,
    ArticlesListCategorieTwoComponent,
    ArticlesListCategorieThreeComponent,
    ArticlesListCategorieFourComponent,
    ArticlesListCategorieFiveComponent,
    ArticleViewComponent,
    AuthentificationComponent,
    CentresDinteretsComponent,
    LandingComponent,
    ProfilComponent,
    LiveComponent,
    MoteurDeRechercheComponent,
    ArticleOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    RouterModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
