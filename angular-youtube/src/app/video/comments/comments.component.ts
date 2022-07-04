import { Component, OnInit } from '@angular/core';

import { VideoService } from '../video.service';
import { IComment } from '../../models/IComment.interface';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
    public comments: IComment[] = [];
    public myComment: string = '';
    public myAnswer: string = '';
    public isReplyActive: boolean = false;
    public isLikeActive: boolean = false;
    public isDislikeActive: boolean = false;
    public operationComment: string = 'comment';
    public operationAnswer: string = 'answer';

    constructor(private _videoService: VideoService) {}

    ngOnInit(): void {
        this._videoService.getComments().subscribe((data) => {
            data.items.forEach(
                (item: { snippet: { topLevelComment: IComment } }) => {
                    this.comments.push(item.snippet.topLevelComment);
                }
            );
        });
    }

    public showReplyInput(): void {
        this.isReplyActive = true;
    }

    public toggleLike(): void {
        this.isLikeActive = !this.isLikeActive;
        this.isDislikeActive = false;
    }

    public toggleDislike(): void {
        this.isDislikeActive = !this.isDislikeActive;
        this.isLikeActive = false;
    }
}
