export interface IVideoSnippet {
    title: string;
    description: string;
    imageUrl: string;
    channelTitle: string;
    channelId: string;
    publishedAt: string;
    thumbnails: {
        high: {
            url: string;
        };
    };
}
