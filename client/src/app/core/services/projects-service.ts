import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProjectsAPI } from '../models/projects.models';
@Injectable({ providedIn: 'root' })


export class ProjectsService {
  constructor(private _http: HttpClient) {}
  private apiURL = 'http://localhost:3000/api/projects';
  getInfo() {
    return this._http.get<IProjectsAPI[]>(this.apiURL);
  }
  addInfo(projData: Partial<IProjectsAPI[]>) {
    return this._http.put(this.apiURL, projData);
  }
  removeInfo(id: string) {
    return this._http.delete(`${this.apiURL}/${id}`);
  }
}
