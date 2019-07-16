export interface IPortfolioItem {
    itemID: string,
    itemName: string,
    itemTagline: string,
    itemDescription: {
        alphaDemo: string,
        finalVersion: string,
        srcCode: string,
        project: string,
        tech: string,
        future: string,
        feedback: string
    },
    itemImageDesktop: string,
    itemImageMobile: string 
}