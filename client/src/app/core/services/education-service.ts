import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { IEducationAPI } from '../models/education.model';

@Injectable({ providedIn: 'root' })
export class EducationService {
  constructor(private _http: HttpClient) {}
  private apiURL = 'http://localhost:3000/api/education';
  getInfo() {
    return this._http.get<IEducationAPI[]>(this.apiURL);
  }
  addInfo(eduData: Partial<IEducationAPI[]>) {
    return this._http.put(this.apiURL, eduData);
  }
  removeInfo(id: string) {
    return this._http.delete(`${this.apiURL}/${id}`);
  }
}
