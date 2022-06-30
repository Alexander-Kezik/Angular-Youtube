import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {
        path: 'search-page',
        component: SearchComponent,
        pathMatch: 'full',
    },
    /*
    {
        path: '/channel-page',
    },
    {
        path: '/video-page',
    },
    {
        path: '**',
        redirectTo: '/',
    },
    */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
