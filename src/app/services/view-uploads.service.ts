import { Injectable } from '@angular/core';
import { Video } from '../my-posts/upload';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewUploadsService {

  private url = 'http:/localhost:8080/registration-service/api/v1/register/{username}';

  constructor(private http: HttpClient) { }

  getNews(): Observable <Video> {
    return this.http.get<Video>(this.url);
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
}
