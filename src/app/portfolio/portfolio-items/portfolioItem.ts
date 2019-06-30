export interface IPortfolioItem {
    itemID: string,
    itemName: string,
    itemTagline: string,
    itemDescription: {
        project: string,
        tech: string,
        future: string
    },
    itemImageDesktop: string,
    itemImageMobile: string 
}