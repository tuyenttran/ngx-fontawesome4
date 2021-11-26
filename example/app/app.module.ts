import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HighlightJsModule } from 'ngx-highlight-js';
import { NgxFontAwesomeModule } from '../../src/ngx-fontawesome.module';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HighlightJsModule,
        NgxFontAwesomeModule
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [
        { provide: 'ngxFontAwesome', useValue: { svgSupport: true, prefix: [ 'far', 'fas', 'fab' ] } }
    ]
})
export class AppModule {
}
