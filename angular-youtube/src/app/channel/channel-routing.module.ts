import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
    // { path: 'channel-page/video' },
    // { path: 'channel-page/playlists' },
    // { path: 'channel-page/community' },
    // { path: 'channel-page/channels' },
    // { path: 'channel-page/about' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ChannelRoutingModule { }
