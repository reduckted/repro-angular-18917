import { Component, signal } from '@angular/core';
import { ANIMATIONS, BaseComponent } from '../base/base.component';

@Component({
    selector: 'app-host-signal',
    standalone: true,
    templateUrl: '../base/base.component.html',
    styleUrl: '../base/base.component.css',
    animations: [ANIMATIONS],
    host: { '[class.short]': 'short()' }
})
export class HostSignalComponent extends BaseComponent {
    public override code: string = `host: { '[class.short]': 'short()' }

// ...

public short: Signal<boolean>

// ...

this.short.set(value);
`;

    public short = signal(false);

    public override setShort(value: boolean): void {
        this.short.set(value);
    }
}
