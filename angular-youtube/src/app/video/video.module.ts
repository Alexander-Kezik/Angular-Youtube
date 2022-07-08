import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';

import { VideoComponent } from './video.component';
import { SharedModule } from '../shared/shared.module';
import { RelatedVideosComponent } from './related-videos/related-videos.component';
import { VideoInfoComponent } from './video-info/video-info.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { CommentsComponent } from './comments/comments.component';
import { VideoRoutingModule } from './video-routing.module';
import { InputCommentComponent } from './comments/input-comment/input-comment.component';
import { SanitizeUrlPipe } from './pipe/sanitize-url.pipe';

@NgModule({
    declarations: [
        VideoComponent,
        RelatedVideosComponent,
        VideoInfoComponent,
        VideoPlayerComponent,
        CommentsComponent,
        InputCommentComponent,
        SanitizeUrlPipe,
    ],
    imports: [
        SharedModule,
        MatIconModule,
        MatTabsModule,
        MatButtonModule,
        MatDividerModule,
        MatMenuModule,
        MatInputModule,
        VideoRoutingModule,
    ],
})
export class VideoModule {}
