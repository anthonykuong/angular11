import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    constructor(
        private route: ActivatedRoute,
        private translateService: TranslateService) {
    }
    init() {
        this.route.queryParams.subscribe(params => {
            this.setLanguage(params && params.lang);
        });
    }
    setLanguage(lang: string) {
        if (lang) {
            if (this.translateService.currentLang !== lang) {
                this.translateService.use(lang);
            }
        }
    }
}
