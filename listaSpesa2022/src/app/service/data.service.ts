import { Collections } from './../../interface';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllData():Observable<Collections[]>{
    return this.http.get<Collections[]>(environment.apiUrl + '/' + '__collections__');
  }
}
