import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Apod } from '../models/apod.model';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  constructor(
    private apiService: ApiService
  ) {}

  private apiUrl = environment.apodUrl;
  private apiKey = environment.apiKey;



  fetchApod(): Observable<Apod>{
    return this.apiService.get<Apod>(this.apiUrl, this.apiKey);
  }

  

}
