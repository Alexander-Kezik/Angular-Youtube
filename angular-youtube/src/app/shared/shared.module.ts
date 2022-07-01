import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';

@NgModule({
    declarations: [
        VideoListItemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        VideoListItemComponent
    ]
})

export class SharedModule { }
