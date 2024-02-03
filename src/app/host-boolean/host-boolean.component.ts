import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ANIMATIONS, BaseComponent } from '../base/base.component';

@Component({
    selector: 'app-host-boolean',
    standalone: true,
    templateUrl: '../base/base.component.html',
    styleUrl: '../base/base.component.css',
    animations: [ANIMATIONS],
    host: { '[class.short]': 'short' }
})
export class HostBooleanComponent extends BaseComponent {
    readonly #changeDetector = inject(ChangeDetectorRef);

    public override code: string = `host: { '[class.short]': 'short' }

// ...

public short: boolean

// ...

this.short = value;
this.#changeDetector.markForCheck();
`;

    public short: boolean = false;

    public override setShort(value: boolean): void {
        this.short = value;
        this.#changeDetector.markForCheck();
    }
}
