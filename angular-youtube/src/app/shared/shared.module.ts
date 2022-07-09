import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { VideoListItemComponent } from './video-list-item/video-list-item.component';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';

@NgModule({
    declarations: [
        VideoListItemComponent,
        PlaylistItemComponent
    ],
    imports: [
        CommonModule,
        MatIconModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        VideoListItemComponent,
        PlaylistItemComponent
    ]
})

export class SharedModule { }
