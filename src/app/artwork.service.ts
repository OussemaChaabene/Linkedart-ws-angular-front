import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  private baseUrl = 'http://localhost:8040/linkedart'; 
  
  constructor(private http: HttpClient) { }

  getAllArtworks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllArtworks`);
  }
}