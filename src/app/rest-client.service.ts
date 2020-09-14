import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  urlServer: string = "http://93.170.116.220:8080/";
  forumUrl: string = "http://93.170.116.220/phpBB3/";

  constructor(private http: HttpClient) { }

  getOne(path: string): Observable<Object> {
    return this.http.get<Object>(this.urlServer + path);
  }

  getAll(path: string): Observable<Object[]> {
    return this.http.get<Object[]>(this.urlServer + path);
  }

  getForumUrl() {
    return this.forumUrl;
  }

}
