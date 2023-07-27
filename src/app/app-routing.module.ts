import { MoteurDeRechercheComponent } from './moteur-de-recherche/moteur-de-recherche.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { LiveComponent } from './live/live.component';
import { ProfilComponent } from './profil/profil.component';
import { ArticlesListCategorieFiveComponent } from './articles-list-categorie-five/articles-list-categorie-five.component';
import { ArticlesListCategorieFourComponent } from './articles-list-categorie-four/articles-list-categorie-four.component';
import { ArticlesListCategorieThreeComponent } from './articles-list-categorie-three/articles-list-categorie-three.component';
import { ArticlesListCategorieTwoComponent } from './articles-list-categorie-two/articles-list-categorie-two.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { LandingComponent } from './landing/landing.component';
import { CentresDinteretsComponent } from './centres-dinterets/centres-dinterets.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListCategorieOneComponent } from './articles-list-categorie-one/articles-list-categorie-one.component';
import { ArticleOneComponent } from './article-one/article-one.component';


const routes: Routes = [
  { path: '', component: AuthentificationComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'authentification/centre-d-interet', component: CentresDinteretsComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'accueil/view', component: ArticleViewComponent },
  { path: 'accueil', component: ArticlesListComponent },
  { path: 'accueil/categorie-1', component: ArticlesListCategorieOneComponent },
  { path: 'accueil/categorie-2', component: ArticlesListCategorieTwoComponent },
  { path: 'accueil/categorie-3', component: ArticlesListCategorieThreeComponent },
  { path: 'accueil/categorie-4', component: ArticlesListCategorieFourComponent },
  { path: 'accueil/categorie-5', component: ArticlesListCategorieFiveComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'direct', component: LiveComponent },
  { path: 'moteur-de-recherche', component: MoteurDeRechercheComponent },
  { path: 'article-one', component: ArticleOneComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
