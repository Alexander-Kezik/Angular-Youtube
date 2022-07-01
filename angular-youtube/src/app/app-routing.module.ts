import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // {
    //     path: 'search-page',
    // },
    // {
    //     path: 'channel-page',
    // },
    {
        path: 'video-page',
        loadChildren: () =>
            import('./video/video.module').then((m) => m.VideoModule),
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
