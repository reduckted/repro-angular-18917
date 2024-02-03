import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CustomErrorHandler } from './custom-error-handler.service';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        { provide: ErrorHandler, useExisting: CustomErrorHandler }
    ]
};
