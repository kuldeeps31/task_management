//import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

//@Injectable({
//  providedIn: 'root'
//})
//export class CodeExecutionService {
//  private apiUrl = 'http://localhost:3000/execute';

//  constructor(private http: HttpClient) {}
//  executeCode( code: string) {
//    const payload = { code };
//    return this.http.post(this.apiUrl, payload);
//  }
//}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeExecutionService {

  private apiUrl = 'https://example.com/api/execute';  // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  executeCode(code: string): Observable<any> {
    return this.http.post(this.apiUrl, { code });
  }
}
