import { HttpClient } from '@angular/common/http';
import { Service } from '@angular/core';
import { IAboutAPI } from '../models/about.model';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AboutService {
    constructor(private _http: HttpClient){}

    private apiURL = 'http://localhost:3000/about';
    getInfo(){return this._http.get<IAboutAPI>(this.apiURL);}
    addInfo(portData:FormData){return this._http.patch(this.apiURL, portData);}
}
