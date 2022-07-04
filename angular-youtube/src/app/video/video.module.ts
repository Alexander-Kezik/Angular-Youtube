import { NgModule } from '@angular/core';
import { VideoComponent } from './video.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { RelatedVideosComponent } from './related-videos/related-videos.component';
import { VideoInfoComponent } from './video-info/video-info.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from "@angular/material/menu";
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
    declarations: [VideoComponent, RelatedVideosComponent, VideoInfoComponent, VideoPlayerComponent],
    imports: [
        SharedModule,
        MatIconModule,
        MatTabsModule,
        MatButtonModule,
        MatDividerModule,
        MatMenuModule,
        RouterModule.forChild([
            {
                path: '',
                component: VideoComponent,
            },
        ]),
    ],
})
export class VideoModule {}
