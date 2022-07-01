import { NgModule } from '@angular/core';
import { VideoComponent } from './video.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { RelatedVideosComponent } from './related-videos/related-videos.component';

@NgModule({
    declarations: [VideoComponent, RelatedVideosComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: VideoComponent,
            },
        ]),
    ],
})
export class VideoModule {}
