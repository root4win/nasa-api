import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http : HttpClient
  ) { }


  get<T>( apiUrl: string, apiKey?: string,  params?: any): Observable<T>{
    let httpParams = new HttpParams();

    if(params) {
      Object.keys(params).forEach(key => {
        if(params[key] !== null && params[key] !== undefined){
          httpParams = httpParams.set(key, params[key])
        }
      })
    }
    if(apiKey)
    {
      return this.http.get<T>(`${apiUrl}${apiKey}`, {params: httpParams});
    }
    else
    {

      return this.http.get<T>(`${apiUrl}`, {params: httpParams});

    }
  }

}
