import { Component, OnInit } from '@angular/core';

import { VideoService } from '../video.service';
import { IComment } from '../../models/IComment.interface';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
    public comments$: IComment[] = [];
    public myComment: string = '';
    public myAnswer: string = '';
    public replyActive: boolean = false;
    public likeActive: boolean = false;
    public dislikeActive: boolean = false;
    public operationComment: string = 'comment';
    public operationAnswer: string = 'answer';

    constructor(private _videoService: VideoService) {}

    ngOnInit(): void {
        this._videoService.getComments().subscribe((data) => {
            data.items.forEach(
                (item: { snippet: { topLevelComment: IComment } }) => {
                    this.comments$.push(item.snippet.topLevelComment);
                }
            );
            console.log(this.comments$);
        });
    }

    public showReplyInput(): void {
        this.replyActive = true;
    }

    public toggleLike(): void {
        this.likeActive = !this.likeActive;
        this.dislikeActive = false;
    }

    public toggleDislike(): void {
        this.dislikeActive = !this.dislikeActive;
        this.likeActive = false;
    }
}
