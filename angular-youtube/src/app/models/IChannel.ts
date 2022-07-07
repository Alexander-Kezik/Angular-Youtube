export interface ISnippet {
    title: string,
    thumbnails: {
        default: {
            url: string
        }
    }
}

export interface IChannel {
    snippet: ISnippet
    statistics: {
        subscriberCount: number
    },
    brandingSettings: {
        image: {
            bannerExternalUrl: string
        },
    }
}
