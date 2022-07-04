import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/shared/shared-service/shared.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(private _sharedService: SharedService) {}

    public submit(form: NgForm): void {
        if (form.valid) {
            this._sharedService.sendClickEvent(form.value.search);
        }
    }
}
