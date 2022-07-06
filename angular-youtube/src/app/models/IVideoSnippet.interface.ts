export interface IVideoSnippet {
    title: string;
    description: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: {
        high: {
            url: string
        }
    }
}
