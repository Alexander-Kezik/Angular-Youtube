import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
    // {
    //     path: 'search-page',
    // },
    // {
    //     path: 'channel-page',
    // },
    {
        path: 'video-page',
        component: VideoComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
