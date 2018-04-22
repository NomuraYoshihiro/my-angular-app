import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from './player';

@Injectable()
export class PlayerService {
  constructor(private http: HttpClient) { }
  private apiUrl = 'api/players';  // Web APIのURL

  getPlayers (): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl);
  }
}
