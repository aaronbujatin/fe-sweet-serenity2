import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private API_URL = environment.baseUrl;           


  public sendInquiry(user: User) {
    return this.httpClient.post<any>(`${this.API_URL}/api/v1/users`, user);
  }
}
