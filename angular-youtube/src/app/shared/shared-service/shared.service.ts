import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    private _subject = new Subject<any>();
    private _query: string = '';

    public sendClickEvent(query: string) {
        this._query = query;
        this._subject.next(query);
    }

    public getClickEvent(): Observable<any> {
        return this._subject.asObservable();
    }

    public getQuery(): string {
        return this._query;
    }
}
