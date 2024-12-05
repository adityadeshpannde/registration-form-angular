import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: any = {};

  setUserData(data: any) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }
}
