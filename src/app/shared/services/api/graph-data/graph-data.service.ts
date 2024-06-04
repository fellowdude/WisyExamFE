import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphDataService {

  constructor(private httpService: HttpService) { }

  registerParticipant(id: string): Observable<any>{
    return this.httpService.get(`${id}/31,80/forecast`);
  }
}
