import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ServicioResponseDTO } from '../models/servicio.model';


@Injectable({
  providedIn: 'root',
})
export class Servicio {
  private http = inject(HttpClient);

  private apiUrl = `${environment.apiUrl}/servicios`;

  getServices(): Observable<ServicioResponseDTO[]>{
    return this.http.get<ServicioResponseDTO[]>(this.apiUrl);
  }


}
