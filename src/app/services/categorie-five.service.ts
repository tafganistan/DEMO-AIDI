import { ArticleBase } from "../models/article-base.models";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CategorieFiveService {
    articleBases: ArticleBase [] = [
        {
            id: 1,
            categorie: "Excellence",
            sousTitre: "Distinction professionnelle",
            titre: "La Ministre Kaba Nialé primé pour son parcours académique",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_6.png",
            imageType: "portrait",
        },
        {
            id: 3,
            categorie: "Excellence",
            sousTitre: "Technologie",
            titre: "le Minsitre Amadou coulibaly reçoit les initiateurs de la plateforme intélligente",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_19.png",
        },
        {
            id: 3,
            categorie: "Excellence",
            sousTitre: "Prix BusWom",
            titre: "Edith Brou reçoix le prix BusWom de l'économie numérique",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_18.png",
            imageType: "portrait",
        },
        {
            id: 4,
            categorie: "Excellence",
            sousTitre: "Distinction Académique",
            titre: "L'économiste Ivoirien du FMI GOMEZ AGOU primé à l'ENSEA d'Abidjan",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_17.png",
            imageType: "portrait",
        },

    ];

    getAllArticlesBases() : ArticleBase [] {
        return this.articleBases;
    }
}