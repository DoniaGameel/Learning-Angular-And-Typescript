import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http: HttpClient) { }
  users() {
    return this.http.get('http://localhost:4000/users')
  }

  saveUsers (data: any){
    return this.http.post('http://localhost:4000/users',data)
  }
}
