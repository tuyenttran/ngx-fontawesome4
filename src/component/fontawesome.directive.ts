/**
 * Created by Tuyen Tran on 7/1/2017.
 */

import {Directive, ElementRef, HostBinding, OnChanges, Renderer2, SimpleChange} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {NgxIconComponent} from './icon.component';

@Directive({
    selector: 'i[fa]' // <i fa ...></i>
})
export class NgxFontAwesomeDirective extends NgxIconComponent implements OnChanges {

    private _childElement;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(sanitizer: DomSanitizer,
                private _el: ElementRef,
                private _renderer: Renderer2) {
        super(sanitizer);
        this._el.nativeElement.classList.add('fa');
    }

    // -------------------------------------------------------------------------
    // Binding
    // -------------------------------------------------------------------------

    @HostBinding('attr.title')
    get tooltipTitle(): string {
        return !!this.title ? this.title : null;
    }

    @HostBinding('style')
    get otherStyles(): SafeStyle | null {
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
    ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
        if (!changes) {
            return;
        }
        // add handling for change of 'alt' value
        const index: number = Object.keys(changes).indexOf('alt');
        if (index >= 0) {
            // dynamically add span element similar to this template
            // <span class="fa-sr-only" [innerHTML]="alt"></span>
            const currentValue: string = changes['alt'].currentValue;
            // remove the existing span
            if (this._childElement) {
                this._childElement.remove();
                this._childElement = null;
            }
            // add the NEW span element with new alt text
            if (!!currentValue && currentValue.trim().length > 0) {
                this._childElement = this._renderer.createElement('span');
                const altText =  this._renderer.createText(currentValue);
                this._renderer.appendChild(this._childElement, altText);
                this._renderer.addClass(this._childElement, 'fa-sr-only');
                this._renderer.insertBefore(this._el.nativeElement.parentElement, this._childElement, this._renderer.nextSibling(this._el));
            }
        }
        // call default handling in base class
        super.ngOnChanges(changes);
    }

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
