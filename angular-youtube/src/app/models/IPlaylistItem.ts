export interface IPlaylistItem {
    snippet: {
        publishedAt: string,
        title: string,
        channelTitle: string,
        playlistId: string,
        thumbnails: {
            high: {
                url: string
            }
        }
    }
}
