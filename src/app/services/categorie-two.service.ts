import { ArticleBase } from "../models/article-base.models";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CategorieTwoService {
    articleBases: ArticleBase [] = [
        {
            id: 1,
            categorie: "Infrastructures",
            sousTitre: "Baie de Cocody",
            titre: "Bientôt la fin des travaux",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_2.png",
        },
        {
            id: 2,
            categorie: "Infrastructures",
            sousTitre: "Stade d'Ebimpé",
            titre: "Travaux d'agrandissement du stade d'Ebimpé",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/ebimpe2.png",
        },
        {
            id: 3,
            categorie: "Infrastructures",
            sousTitre: "Ville de Bouaké",
            titre: "Travaux d'assainissement du quartier du stade de la paix",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/bouake.png",
        },
    ];

    getAllArticlesBases() : ArticleBase [] {
        return this.articleBases;
    }
}