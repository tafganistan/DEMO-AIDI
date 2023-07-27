import { ArticleBase } from "../models/article-base.models";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CategorieFourService {
    articleBases: ArticleBase [] = [
        {
            id: 1,
            categorie: "Sport",
            sousTitre: "Coupe d'Afrique 2024",
            titre: "Les 6 stades de la compétition",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/stade_yakro.png",
        },
        {
            id: 2,
            categorie: "Sport",
            sousTitre: "Selection Ivoirienne",
            titre: "Franck Kessié bientôt capitaine de la selection Ivoirienne ?",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_14.png",
        },
        {
            id: 3,
            categorie: "Sport",
            sousTitre: "FIF",
            titre: "Didier Drogba de retour à la FIF",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_15.png",
            imageType: "portrait"
        },

    ];

    getAllArticlesBases() : ArticleBase [] {
        return this.articleBases;
    }
}