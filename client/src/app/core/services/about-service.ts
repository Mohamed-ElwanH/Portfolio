import { HttpClient } from '@angular/common/http';
import { IAboutAPI } from '../models/about.model';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AboutService {
    constructor(private _http: HttpClient){}

    private apiURL = 'http://localhost:3000/api/about';
    getInfo(){return this._http.get<IAboutAPI>(this.apiURL);}
addInfo(portData: Partial<IAboutAPI>){return this._http.patch(this.apiURL, portData);}
}
