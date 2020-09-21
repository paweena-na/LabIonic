import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedBack   } from './models/feedback';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://codingthailand.com/api/insert_user.php';

  constructor(private http: HttpClient) { }
  signup(fullname: string, email: string, password: string):
    Observable<FeedBack> {
    const header = { 'Content-Type': 'application/json' }; 
    const body = {
      'fullname': fullname,
      'email': email,
      'password': password
 
    };
    // ใช้ method post() ส าหรับส่ง data เพือไปบันทึกข้อมูล
    return this.http.post<FeedBack>(this.apiUrl, body, { headers: header });
  }
}

