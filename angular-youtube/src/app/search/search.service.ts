import { Injectable } from '@angular/core';
import { IVideo } from './search';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    videoList: Array<IVideo> = [
        {
            title: 'Funny Cats Compilation (Most Popular) Part 1',
            author: 'NoCAT NoLiFE 2',
            authorUrl:
                'https://yt3.ggpht.com/ytc/AKedOLQ5jakrCH-_-_ONt1schyCpkZIjzqIYetuR2USESg=s176-c-k-c0x00ffffff-no-rj',
            videoURL: 'https://www.youtube.com/embed/h23IoT-_tdo',
            view: 5000000,
            date: 6,
        },
        {
            title: 'Titanic with a Cat',
            author: 'NoCAT NoLiFE 2',
            authorUrl:
                'https://yt3.ggpht.com/ytc/AKedOLQ5jakrCH-_-_ONt1schyCpkZIjzqIYetuR2USESg=s176-c-k-c0x00ffffff-no-rj',
            videoURL: 'https://www.youtube.com/embed/kEPfM3jSoBw',
            view: 45000,
            date: 10,
        },
        {
            title: 'Best Compilation of Funny & Cute DOG Videos!',
            author: 'Animal Squad',
            authorUrl:
                'https://yt3.ggpht.com/huK3aP7dQ4mnUvVCu6ZlTUoJOxo4lh78Nd5S2qZTErkJqQqjqL59uUQEwzuX0qrWTMnO4oLz=s88-c-k-c0x00ffffff-no-rj',
            videoURL: 'https://www.youtube.com/embed/49ulPGJqD3s',
            view: 100000,
            date: 9,
        },
        {
            title: 'Funny Cats Compilation (Most Popular) Part 1',
            author: 'NoCAT NoLiFE 2',
            authorUrl:
                'https://yt3.ggpht.com/ytc/AKedOLQ5jakrCH-_-_ONt1schyCpkZIjzqIYetuR2USESg=s176-c-k-c0x00ffffff-no-rj',
            videoURL: 'https://www.youtube.com/embed/h23IoT-_tdo',
            view: 5000000,
            date: 6,
        },
        {
            title: 'Funny Cats Compilation (Most Popular) Part 1',
            author: 'NoCAT NoLiFE 2',
            authorUrl:
                'https://yt3.ggpht.com/ytc/AKedOLQ5jakrCH-_-_ONt1schyCpkZIjzqIYetuR2USESg=s176-c-k-c0x00ffffff-no-rj',
            videoURL: 'https://www.youtube.com/embed/h23IoT-_tdo',
            view: 5000000,
            date: 6,
        },
    ];

    constructor() {}
}
