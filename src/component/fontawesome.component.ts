/**
 * Created by Tuyen Tran on 11/02/2021.
 */

import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {NgxIconComponent} from './icon.component';

@Component({
    selector: 'fa',
    templateUrl: './fontawesome.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class NgxFontAwesomeComponent extends NgxIconComponent  {

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(sanitizer: DomSanitizer) {
        super(sanitizer);
    }

    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    classList: Array<string> = ['fa'];

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    /**
     @override
     */
    public addCssClass(className: string): void {
        if (!this.classList) {
            this.classList = [];
        }
        // check uniqueness
        const index: number = this.classList.indexOf(className);
        if (index === -1) {
            this.classList.push(className);
        }
    }

    /**
     @override
     */
    public removeCssClass(className: string): void {
        if (!this.classList) {
            this.classList = [];
        }
        const index: number = this.classList.indexOf(className);
        if (index >= 0) {
            this.classList.splice(index, 1);
        }
    }
}
