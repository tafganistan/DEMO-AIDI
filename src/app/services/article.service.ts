import { ArticleBase } from "../models/article-base.models";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ArticleService {
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
            categorie: "Infrastructures",
            sousTitre: "Baie de Cocody",
            titre: "Bientôt la fin des travaux",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_2.png",
        },
        {
            id: 3,
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
            id: 4,
            categorie: "Sport",
            sousTitre: "Coupe d'Afrique 2024",
            titre: "Les 6 stades de la compétition",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/stade_yakro.png",
        },
        {
            id: 5,
            categorie: "Excellence",
            sousTitre: "Distinction professionnelle",
            titre: "La Ministre Kaba Nialé primé pour son parcours académique",
            resume: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.",
            description: "Le Lorem Ipsum est simplement drem Ipsum est le faux imprimeur Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique",
            createdDate: new Date(),
            imageUrl: "../assets/articles/article_6.png",
            imageType: "portrait",
        }

    ];

    getAllArticlesBases() : ArticleBase [] {
        return this.articleBases;
    }

    getArticleBaseById(articleBaseId: number): ArticleBase {
        const articleBase = this.articleBases.find(articleBase => articleBase.id === articleBaseId);
        if (!articleBase) {
            throw new Error('ArticleBase not found!');
        } else {
            return articleBase;
        }
    }
}