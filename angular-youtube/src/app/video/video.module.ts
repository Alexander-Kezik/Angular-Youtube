import { NgModule } from '@angular/core';
import { VideoComponent } from './video.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [VideoComponent],
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
