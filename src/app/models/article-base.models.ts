export class ArticleBase {
    id!: number;
    categorie!: string;
    sousTitre!: string;
    titre!: string;
    resume!: string;
    description!: string;
    createdDate!: Date;
    imageUrl!: string;
    imageType?: string;
    videoUrl?: string;
    audioUrl?: string;
}