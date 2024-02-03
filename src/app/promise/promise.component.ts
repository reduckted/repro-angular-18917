import { Component, HostBinding } from '@angular/core';
import { ANIMATIONS, BaseComponent } from '../base/base.component';

@Component({
    selector: 'app-promise',
    standalone: true,
    templateUrl: '../base/base.component.html',
    styleUrl: '../base/base.component.css',
    animations: [ANIMATIONS]
})
export class PromiseComponent extends BaseComponent {
    public override code: string = `@HostBinding('class.short')
public short: boolean

// ...

Promise.resolve().then(() => (this.short = value));
`;

    @HostBinding('class.short')
    public short: boolean = false;

    public override setShort(value: boolean): void {
        Promise.resolve().then(() => (this.short = value));
    }
}
