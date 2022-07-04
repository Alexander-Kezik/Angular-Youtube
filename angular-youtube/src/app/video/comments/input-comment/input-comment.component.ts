import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'app-input-comment',
    templateUrl: './input-comment.component.html',
    styleUrls: ['./input-comment.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCommentComponent implements OnInit {
    @Input() myText: string = '';
    @Input() operation: string = '';
    @Input() replyActive: boolean = false;
    public addCommentButtonsActive: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    public showAddCommentButtons(): void {
        this.addCommentButtonsActive = true;
    }

    public hideAddCommentButtons(): void {
        if (this.operation === 'comment') {
            this.addCommentButtonsActive = false;
            this.myText = '';
        } else this.replyActive = false;
    }
}
