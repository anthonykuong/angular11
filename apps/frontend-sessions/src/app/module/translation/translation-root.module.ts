import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from './service/translation-service';
import { Language } from './model/language.model';
@NgModule({
    imports: [
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: TranslationService,
                deps: [HttpClient]
            }
        })
    ],
    exports: [
        // module exported to expose translate service and pipes to testbed
        TranslateModule
    ]
})
export class TranslationRootModule {
    constructor(translate: TranslateService) {
        translate.setDefaultLang(Language.en);
        translate.use(Language.en);
    }
}
