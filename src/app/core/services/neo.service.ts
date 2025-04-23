import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Neo } from '../models/neo.model';

@Injectable({
  providedIn: 'root'
})
export class NeoService {
  private apiUrl = environment.neoUrl;
  private apiKey = environment.apiKey;

  constructor(
    private apiService: ApiService
  ) { }

  fetchNeoData(): Observable<Neo>{
    return this.apiService.get<Neo>(this.apiUrl, this.apiKey);
  }
}
