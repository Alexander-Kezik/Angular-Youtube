import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'publicationData',
})
export class PublicationDataPipe implements PipeTransform {
    transform(value: string): string {
        const res = Math.round((Date.now() - Date.parse(value)) / 60000);
        if (res > 60 * 24) {
            return Math.round(res / 60 / 24) > 1
                ? Math.round(res / 60 / 24) + ' days ago'
                : Math.round(res / 60 / 24) + ' day ago';
        } else if (res > 60) {
            return Math.round(res / 60) > 1
                ? Math.round(res / 60) + ' hours ago'
                : Math.round(res / 60) + ' hour ago';
        } else if (res < 1) {
            return res * 60 > 1
                ? res * 60 + ' seconds ago'
                : res * 60 + ' second ago';
        } else return res > 1 ? res + ' minutes ago' : res + ' minute ago';
    }
}
