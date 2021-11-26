import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'demo-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    pulseAnimation: string;
    pulseIndex = 0;

    spinAnimation: string;
    spinIndex = 0;

    growValue: number;
    growIndex = 0;

    shrinkValue: number;
    shrinkIndex = 0;

    upValue: number;
    upIndex = 0;

    downValue: number;
    downIndex = 0;

    leftValue: number;
    leftIndex = 0;

    rightValue: number;
    rightIndex = 0;

    rotateValue: number;
    rotateIndex = 0;

    flipValue: string;
    flipIndex = 0;

    spinAnimationValues: string[] = [ 'spin', null ];
    pulseAnimationValues: string[] = [ 'pulse', null ];

    translationValues = [ 2, 4, 6, 8, 10, 0 ];
    rotationValues = [ 45, 90, 135, 180, 225, 270, 315, 0 ];
    flippingValues: string[] = [ 'horizontal', 'vertical', 'both', null ];

    constructor() {
        this.pulseAnimation = this.pulseAnimationValues[this.pulseIndex];
        this.spinAnimation = this.spinAnimationValues[this.spinIndex];

        this.growValue = this.translationValues[this.growIndex];
        this.shrinkValue = this.translationValues[this.shrinkIndex];

        this.upValue = this.translationValues[this.upIndex];
        this.downValue = this.translationValues[this.downIndex];
        this.leftValue = this.translationValues[this.leftIndex];
        this.rightValue = this.translationValues[this.rightIndex];

        this.rotateValue = this.rotationValues[this.rotateIndex];
        this.flipValue = this.flippingValues[this.flipIndex];
    }

    // SCALING

    public updateGrowValue() {
        this.growIndex = (this.growIndex + 1) % this.translationValues.length;
        this.growValue = this.translationValues[this.growIndex];
    }

    public updateShrinkValue() {
        this.shrinkIndex = (this.shrinkIndex + 1) % this.translationValues.length;
        this.shrinkValue = this.translationValues[this.shrinkIndex];
    }

    /// TRANSLATION

    public updateUpValue() {
        this.upIndex = (this.upIndex + 1) % this.translationValues.length;
        this.upValue = this.translationValues[this.upIndex];
    }

    public updateDownValue() {
        this.downIndex = (this.downIndex + 1) % this.translationValues.length;
        this.downValue = this.translationValues[this.downIndex];
    }

    public updateLeftValue() {
        this.leftIndex = (this.leftIndex + 1) % this.translationValues.length;
        this.leftValue = this.translationValues[this.leftIndex];
    }

    public updateRightValue() {
        this.rightIndex = (this.rightIndex + 1) % this.translationValues.length;
        this.rightValue = this.translationValues[this.rightIndex];
    }

    /// ROTATION

    public updateRotateValue() {
        this.rotateIndex = (this.rotateIndex + 1) % this.rotationValues.length;
        this.rotateValue = this.rotationValues[this.rotateIndex];
    }

    public updateFlipValue() {
        this.flipIndex = (this.flipIndex + 1) % this.flippingValues.length;
        this.flipValue = this.flippingValues[this.flipIndex];
    }


    /// ANIMATION

    public updatePulse() {
        this.pulseIndex = (this.pulseIndex + 1) % this.pulseAnimationValues.length;
        this.pulseAnimation = this.pulseAnimationValues[this.pulseIndex];
    }

    public updateSpin() {
        this.spinIndex = (this.spinIndex + 1) % this.spinAnimationValues.length;
        this.spinAnimation = this.spinAnimationValues[this.spinIndex];
    }
}
