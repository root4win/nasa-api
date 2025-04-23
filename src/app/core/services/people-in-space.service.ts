import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PeopleInSpace } from '../models/people.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleInSpaceService {
  private apiUrl = environment.peopleInSpaceUrl;

  constructor(
    private apiService: ApiService
  ) { }

  fetchPeopleInSpace(): Observable<PeopleInSpace> {
    return this.apiService.get<PeopleInSpace>(this.apiUrl);
  }
}
