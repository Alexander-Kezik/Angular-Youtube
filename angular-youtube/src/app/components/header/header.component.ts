import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(private _router: Router) {}

    public submit(form: NgForm): void {
        if (form.valid) {
            this._router.navigate(['/search-page'], {
                queryParams: { search_query: form.value.search },
            });
        }
    }
}
