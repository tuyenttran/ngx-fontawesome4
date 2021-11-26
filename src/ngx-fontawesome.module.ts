/**
 * Created by Tuyen Tran on 11/02/2021.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgxFontAwesomeComponent } from './component/fontawesome.component';
import { NgxFontAwesomeDirective } from './component/fontawesome.directive';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule
    ],
    declarations: [
        NgxFontAwesomeComponent,
        NgxFontAwesomeDirective
    ],
    providers: [
        // { provide: 'ngxFontAwesome', useValue: DEFAULT_NGX_FA_OPTIONS },
    ],
    exports: [
        NgxFontAwesomeComponent,
        NgxFontAwesomeDirective
    ]
})
export class NgxFontAwesomeModule {
}
