import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) { }
}
