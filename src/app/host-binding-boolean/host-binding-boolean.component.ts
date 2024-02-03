import {
    ChangeDetectorRef,
    Component,
    HostBinding,
    inject
} from '@angular/core';
import { ANIMATIONS, BaseComponent } from '../base/base.component';

@Component({
    selector: 'app-host-binding-boolean',
    standalone: true,
    templateUrl: '../base/base.component.html',
    styleUrl: '../base/base.component.css',
    animations: [ANIMATIONS]
})
export class HostBindingBooleanComponent extends BaseComponent {
    readonly #changeDetector = inject(ChangeDetectorRef);

    public override code: string = `@HostBinding('class.short')
public short: boolean

// ...

this.short = value;
this.#changeDetector.markForCheck();
`;

    @HostBinding('class.short')
    public short: boolean = false;

    public override setShort(value: boolean): void {
        this.short = value;
        this.#changeDetector.markForCheck();
    }
}
