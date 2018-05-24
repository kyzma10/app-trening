import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/user.model';
import { map } from 'rxjs/internal/operators';

@Injectable()

export class UserService {
  constructor(private http: HttpClient) {}

  public getUser() {
    return this.http.get('../../assets/user.json');
  }
  public getUsers() {
    return this.http.get('../../assets/users.json')
      .pipe(
        map((response => {
          const results: UserModel[] = [];
          response.data.forEach(item => results.push(new UserModel(item)));
          return results;
        }))
      );
  }
}
