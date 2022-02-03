import { HttpErrorResponse, HttpStatusCode } from "@angular/common/http";
import { throwError } from "rxjs";

export class CheckError {
    constructor() { }

    static getMessageError(error: HttpErrorResponse) {
        console.log(error.status)
        switch (error.status) {
            case HttpStatusCode.GatewayTimeout:
                return throwError(() => new Error('La petición se ha quedado esperando'));
            case HttpStatusCode.NotFound:
                return throwError(() => new Error('Recurso no encontrado'));
            case HttpStatusCode.InternalServerError:
                return throwError(() => new Error('Error interno, por favor comuniquese con el administrador'));
            case HttpStatusCode.BadRequest:
                return throwError(() => new Error('La petición ha sido incorrecta'));
            case HttpStatusCode.Unauthorized:
                return throwError(() => new Error('No tiene permisos para acceder a este recurso'));
            default:
                return throwError(() => new Error('Error al obtener los datos'));
        }
    }
}