import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [VideoComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
})
export class VideoModule {}
