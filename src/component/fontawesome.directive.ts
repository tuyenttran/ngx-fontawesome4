/**
 * Created by Tuyen Tran on 7/1/2017.
 */

import {Directive, ElementRef, HostBinding} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {NgxIconComponent} from './icon.component';

@Directive({
    selector: 'i[fa]' // <i fa ...></i>
})
export class NgxFontAwesomeDirective extends NgxIconComponent {

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(sanitizer: DomSanitizer, private _el: ElementRef) {
        super(sanitizer);
        this._el.nativeElement.classList.add('fa');
    }

    // -------------------------------------------------------------------------
    // Binding
    // -------------------------------------------------------------------------

    @HostBinding('style')
    get otherStyles(): SafeStyle {
        return (!!this.allVars && this.allVars.length > 0)
            ? this.getSanitizedStyle(this.allVars)
            : null;
    }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    /**
     @override
     */
    public addCssClass(className: string): void {
        this._el.nativeElement.classList.add(className);
    }

    /**
     @override
     */
    public removeCssClass(className: string): void {
        this._el.nativeElement.classList.remove(className);
    }
}
