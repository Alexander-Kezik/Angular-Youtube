export interface IChannel {
    items: [{
        snippet: {
            title: string,
            thumbnails: {
                default: {
                    url: string
                }
            }
        },
        statistics: {
            subscriberCount: number
        },
        brandingSettings: {
            image: {
                bannerExternalUrl: string
            }
        }
    }]
}
