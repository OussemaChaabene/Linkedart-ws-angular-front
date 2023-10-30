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

  getAllArtists(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllArtists`);
  }

  getAllPortfolios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllPortfolios`);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllUsers`);
  }

  getUserByID(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getUserByID/${id}`);
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getUserByEmail/${email}`);
  }
  
}