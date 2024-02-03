import {
    trigger,
    state,
    style,
    transition,
    animate,
    AnimationEvent
} from '@angular/animations';
import { Directive, HostBinding, HostListener } from '@angular/core';

export const ANIMATIONS = trigger('onOff', [
    state('on', style({ background: 'red' })),
    state('off', style({ background: 'cornflowerblue' })),
    transition('* => on', animate(`3000ms`)),
    transition('* => off', animate(`3000ms`))
]);

@Directive()
export abstract class BaseComponent {
    @HostBinding('@onOff')
    public onOff: 'on' | 'off' = 'off';

    public toggle() {
        this.onOff = this.onOff === 'on' ? 'off' : 'on';
    }

    public abstract setShort(value: boolean): void;

    public abstract code: string;

    @HostListener('@onOff.start', ['$event'])
    protected onStart(event: AnimationEvent): void {
        if (event.toState !== 'on') {
            this.setShort(false);
        }
    }

    @HostListener('@onOff.done', ['$event'])
    protected onDone(event: AnimationEvent): void {
        if (event.toState === 'on') {
            this.setShort(true);
        }
    }
}
