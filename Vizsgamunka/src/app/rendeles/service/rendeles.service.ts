import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Termekek } from '../model/rendeles.model';

@Injectable({
  providedIn: 'root'
})
export class RendelesService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000/posts/';

  getTermekek() {
    return this.http.get<Termekek[]>(this.baseUrl);
  }
  torlesTermekek(id: number) {
    return this.http.delete<Termekek[]>(this.baseUrl + id);
  }
  termekLetrehozasa(termek: Termekek) {
    return this.http.post(this.baseUrl, termek);
  }
  getTermekById(id: number) {
    return this.http.get<Termekek>(this.baseUrl + '/' + id);
  }
  modositasTermek(termek: Termekek) {
    return this.http.put(this.baseUrl + '/' + termek.id, termek);
  }
}