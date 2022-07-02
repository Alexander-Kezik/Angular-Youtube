export interface IVideo {
    id: string;
    snippet: {
        title: string;
        description: string;
        thumbnails: {
            high: {
                url: string,
            }
        }
    }
}

