import { Injectable } from '@angular/core';
import banwords from '../../../data/banwords.json';

@Injectable({
    providedIn: 'root',
})
export class HeaderService {
    constructor() {}

    public checkSearchQueryForBadWords(query: string): boolean {
        let potentialSeparators = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s\d]/g;
        for (let badWord of banwords.banners) {
            if (query.split(potentialSeparators).join('').toLowerCase().includes(badWord)) {
                return true;
            }
        }
        return false;
    }
}
