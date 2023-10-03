import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { API_ENDPOINTS } from "../../app.constants";
import { User } from "../dataModels/user.model";

@Injectable({
  providedIn: 'root',
})

export class UserRepository {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_ENDPOINTS.Users);
  }

  getUser(UserId: string): Observable<User> {
    return this.http.get<User>(API_ENDPOINTS.User + "/" + UserId);
  }

}
