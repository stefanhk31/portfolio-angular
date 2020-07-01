export interface IPortfolioItem {
    id: string;
    name: string;
    tagline: string;s
    previewImageUrl: string;
    detail: IItemDetail;
}

export interface IItemDetail {
    tech: string,
    accomplishments: string[];
    feedback: string;
    links: object;
    carouselImageUrls: string[];
}