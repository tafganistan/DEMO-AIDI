import { ArticleBase } from "../models/article-base.models";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CategorieOneService {
    articleBases: ArticleBase [] = [
        {
            id: 1,
            categorie: "Politique",
            sousTitre: "Cherté de la vie",
            titre: "Le Président prend des mesures importantes",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_1.png",
        },
        {
            id: 2,
            categorie: "Politique",
            sousTitre: "Visite d'État",
            titre: "Le Premier ministre en visite d'État dans le Bafing",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_10.png",
            imageType: "portrait",
        },
        {
            id: 3,
            categorie: "Politique",
            sousTitre: "Conseil national de sécurité",
            titre: "Création d'un nouveau centre opérationel",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_8.png",
        },
        {
            id: 4,
            categorie: "Politique",
            sousTitre: "Assemblée nationale",
            titre: "Conférence à propos du nouveau projet de presse",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_11.png",
            imageType: "portrait",
        },
        {
            id: 5,
            categorie: "Politique",
            sousTitre: "Dialogue politique",
            titre: "Rencontre entre les Présidents Ouattara et Gbagbo",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_7.png",
        },
        {
            id: 6,
            categorie: "Politique",
            sousTitre: "Conseil des ministres",
            titre: "Les décisions fortes du dernier conseil des ministres",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_9.png",
        },
    ];

    getAllArticlesBases() : ArticleBase [] {
        return this.articleBases;
    }
}