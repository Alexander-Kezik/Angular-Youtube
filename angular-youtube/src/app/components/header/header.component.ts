import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeaderService } from './service/header.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(
        private _router: Router,
        private _headerService: HeaderService,
        private _snackBar: MatSnackBar
    ) {}

    public submit(form: NgForm): void {
        if (this._headerService.checkSearchQueryForBadWords(form.value.search)) {
            this._snackBar.open('FORBIDDEN WORD!!!', 'Close', {
                duration: 3000,
            });
        } else if (form.valid) {
            this._router.navigate(['/search-page'], { queryParams: { search_query: form.value.search },
            });
        }
    }
}
