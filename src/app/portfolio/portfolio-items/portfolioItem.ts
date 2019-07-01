export interface IPortfolioItem {
    itemID: string,
    itemName: string,
    itemTagline: string,
    itemDescription: {
        liveDemo: string,
        srcCode: string,
        project: string,
        tech: string,
        future: string
    },
    itemImageDesktop: string,
    itemImageMobile: string 
}