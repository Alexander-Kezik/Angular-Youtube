import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';
import { SanitizeUrlPipe } from './pipes/sanitize-url/sanitize-url.pipe';

@NgModule({
    declarations: [
        VideoListItemComponent,
        SanitizeUrlPipe
    ],
    imports: [CommonModule],
    exports: [
        CommonModule,
        FormsModule,
        VideoListItemComponent,
        SanitizeUrlPipe,
    ],
})
export class SharedModule {}
