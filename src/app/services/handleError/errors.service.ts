import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor() { }

  handleError(errorResponse: any) {
    console.log('ServicesError: ', errorResponse);
    let errorMessage: any = {};

    if (errorResponse.error) {
      errorMessage = {
        ...errorResponse.error,
        isError: true,
        errorCode: errorResponse.status
      }
    } else {
      errorMessage.error = 'Error';
      errorMessage.error_description = `Error en sistema código: ${errorResponse.status}`;
      errorMessage.isError = true;
      errorMessage.errorCode = errorResponse.status;
    }

    return throwError(errorMessage);
  }
}
