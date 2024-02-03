import { ErrorHandler, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        this.errors.next([...this.errors.value, error]);
        console.error(error);
    }

    public errors = new BehaviorSubject<unknown[]>([]);
}
