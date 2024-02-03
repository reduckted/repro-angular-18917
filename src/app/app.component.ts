import { Component, inject } from '@angular/core';
import { CustomErrorHandler } from './custom-error-handler.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { HostBindingBooleanComponent } from './host-binding-boolean/host-binding-boolean.component';
import { HostBindingSignalComponent } from './host-binding-signal/host-binding-signal.component';
import { HostBooleanComponent } from './host-boolean/host-boolean.component';
import { HostSignalComponent } from './host-signal/host-signal.component';
import { PromiseComponent } from './promise/promise.component';
import { SetTimeoutComponent } from './set-timeout/set-timeout.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        AsyncPipe,
        HostBindingBooleanComponent,
        HostBindingSignalComponent,
        HostBooleanComponent,
        HostSignalComponent,
        PromiseComponent,
        SetTimeoutComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    readonly #errorHandler = inject(CustomErrorHandler);

    public get errors(): Observable<unknown[]> {
        return this.#errorHandler.errors;
    }
}
