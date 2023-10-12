import { LOCATION_INITIALIZED } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { APP_INITIALIZER, Injector, NgModule } from "@angular/core";
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

interface languageInfo {
  [language: string]: string
};

const availableLanguages: languageInfo = {
  'en': 'en',
  'es': 'es',
  'pt': 'pt'
};

export const defaultLanguage = 'en';

export function setCurrentLanguage(translateService: TranslateService): Observable<any> {
  const browserCultureLang = translateService!.getBrowserCultureLang()!.toLocaleLowerCase();
  const browserLang = translateService!.getBrowserLang()!.toLocaleLowerCase();

  if (availableLanguages[browserCultureLang]) {
    return translateService.use(availableLanguages[browserCultureLang]);
  } else if (availableLanguages[browserLang]) {
    return translateService.use(availableLanguages[browserLang]);
  } else {
    return translateService.use(defaultLanguage);
  }
}

export function appInitializerFactory(translateService: TranslateService, injector: Injector) {
  return () => {
    new Promise<null>((resolve) => {
      const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
      locationInitialized.then(() => {
        translateService.setDefaultLang(defaultLanguage);

        setCurrentLanguage(translateService).subscribe({
          complete: () => {
            resolve(null);
            window.onlanguagechange = () => setCurrentLanguage(translateService);
          }
        });
      });
    });
  }
}

export class CustomTranslateLoader implements TranslateLoader {
  constructor (
    private httpClient: HttpClient  
  ) { }

  getTranslation(lang: string): Observable<any> {
    return this.httpClient.get(`assets/i18n/${lang.toLocaleLowerCase()}.json`)
      .pipe(
        catchError(() => this.httpClient.get(`assets/i18n/en.json`))
      )   
  }
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [ 
        TranslateService, 
        Injector
      ],
      multi: true
    }
  ]
})
export class LocaleModule { }
