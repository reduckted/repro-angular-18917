import { Component, HostBinding } from '@angular/core';
import { ANIMATIONS, BaseComponent } from '../base/base.component';

@Component({
    selector: 'app-set-timeout',
    standalone: true,
    templateUrl: '../base/base.component.html',
    styleUrl: '../base/base.component.css',
    animations: [ANIMATIONS]
})
export class SetTimeoutComponent extends BaseComponent {
    public override code: string = `@HostBinding('class.short')
public short: boolean

// ...

setTimeout(() => (this.short = value));
`;

    @HostBinding('class.short')
    public short: boolean = false;

    public override setShort(value: boolean): void {
        setTimeout(() => (this.short = value));
    }
}
