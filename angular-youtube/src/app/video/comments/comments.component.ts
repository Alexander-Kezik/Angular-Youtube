import { Component, OnInit } from '@angular/core';

import { VideoService } from '../video.service';
import { IComment } from '../../models/IComment.interface';
import { ActivatedRoute } from '@angular/router';
import { ICache } from '../../models/ICache';

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
    public operationComment: string = 'comment';
    public operationAnswer: string = 'answer';

    public commentLike: ICache = {};
    public commentDislike: ICache = {};

    constructor(
        private _videoService: VideoService,
        private _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const id = this._route.snapshot.paramMap.get('id');
        this._videoService.getComments(id).subscribe((data) => {
            data.items.forEach(
                (item: { snippet: { topLevelComment: IComment } }) => {
                    this.comments.push(item.snippet.topLevelComment);
                }
            );
        });
    }

    public addCommentLike(id: string): void {
        if (!Object.keys(this.commentLike).includes(id)) {
            this.commentLike[id] = true;
            delete this.commentDislike[id];
        }
    }

    public checkCommentLike(id: string): boolean {
        return Object.keys(this.commentLike).includes(id);
    }

    public addCommentDislike(id: string): void {
        if (!Object.keys(this.commentDislike).includes(id)) {
            this.commentDislike[id] = true;
            delete this.commentLike[id];
        }
    }

    public checkCommentDislike(id: string): boolean {
        return Object.keys(this.commentDislike).includes(id);
    }

    public showReplyInput(): void {
        this.isReplyActive = true;
    }
}
