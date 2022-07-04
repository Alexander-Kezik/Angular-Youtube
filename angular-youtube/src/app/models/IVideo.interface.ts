export interface IVideo {
    id: string;
    snippet: {
        title: string;
        description: string;
        channelTitle: string;
    };
    statistics: {
        viewCount: number;
        likeCount: number;
        commentCount: number;
    };
}
