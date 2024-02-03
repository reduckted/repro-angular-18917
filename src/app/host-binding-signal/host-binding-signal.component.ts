import { Component, HostBinding, signal } from '@angular/core';
import { ANIMATIONS, BaseComponent } from '../base/base.component';

@Component({
    selector: 'app-host-binding-signal',
    standalone: true,
    templateUrl: '../base/base.component.html',
    styleUrl: '../base/base.component.css',
    animations: [ANIMATIONS]
})
export class HostBindingSignalComponent extends BaseComponent {
    readonly #short = signal(false);

    public override code = `@HostBinding('class.short')
public get short() {
    return this.#short();
}

// ...

this.#short.set(value);
`;

    @HostBinding('class.short')
    public get short() {
        return this.#short();
    }

    public override setShort(value: boolean): void {
        this.#short.set(value);
    }
}
