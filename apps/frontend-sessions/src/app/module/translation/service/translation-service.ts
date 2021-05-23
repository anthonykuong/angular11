import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class TranslationService implements TranslateLoader {
    private document = document;
    constructor(private http: HttpClient) { }
    getTranslation(lang: string): Observable<any> {

        let path = `${this.getRootPath()}/angular11/assets/i18n/${lang}.json`;
        if (this.getRootPath().includes("localhost")) {
            path = `${this.getRootPath()}/assets/i18n/${lang}.json`;
        }
        return this.http.get(path);
    }
    getRootPath() {
        const scripts = this.document.querySelectorAll('script');
        for (let i = 0; i < scripts.length; i++) {
            const path = scripts[i].src;
            const parts = path.split('/');
            const filename = parts.pop() || '';
            const match = 'main.';
            const ext = '.js';
            if (filename.substr(0, match.length) === match) {
                if (filename.substr(filename.length - ext.length) === ext) {
                    return parts.join('/');
                }
            }
        }
        return '';
    }
}
