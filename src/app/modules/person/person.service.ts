import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PersonService
{
    private apiUrl = 'https://plaservice-hbhbd3eteqbwbfc3.northeurope-01.azurewebsites.net/api/person';
    // private apiUrl = 'http://localhost:5012/api/person';

    constructor(private http: HttpClient)
    {
        
    }

    CreatePerson(personData: any): Observable<any>
    {
        console.log("Yes reached here");
        console.log("Person Data:", personData);
        // console.log("URL: ", `${this.apiUrl}`);
        return this.http.post(`${this.apiUrl}`, personData);
    }

}