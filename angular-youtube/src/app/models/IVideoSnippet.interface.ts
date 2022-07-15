export interface IVideoSnippet {
    title: string;
    description: string;
    channelTitle: string;
    publishedAt: string;
    channelId: string;
    thumbnails: {
        high: {
            url: string
        }
    }
}
