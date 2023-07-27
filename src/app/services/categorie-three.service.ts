import { ArticleBase } from "../models/article-base.models";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CategorieThreeService {
    articleBases: ArticleBase [] = [
        {
            id: 1,
            categorie: "Business",
            sousTitre: "Régulation du secteur privé",
            titre: "Les acteurs du secteur créent une fédération",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_4.png",
            imageType: "portrait",
        },
        {
            id: 2,
            categorie: "Business",
            sousTitre: "Création d'entreprise",
            titre: "Le ministère de la jeunesse met un fond d'investissement à disposition des PME",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_12.png",
        },
        {
            id: 3,
            categorie: "Business",
            sousTitre: "Election 2025",
            titre: "Jean-Louis Billon dévoile le programme du PDCI pour l'entrepreneuriat",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_13.png",
            imageType: "portrait",
        },
        {
            id: 4,
            categorie: "Business",
            sousTitre: "Promotion de l'entrepreneuriat",
            titre: "Life Tv crée le prix du meilleur entrepreneur digital Ivoirien",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_5.png",
            imageType: "portrait",
        },

    ];

    getAllArticlesBases() : ArticleBase [] {
        return this.articleBases;
    }
}