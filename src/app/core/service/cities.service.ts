import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }
  // For Future use to fetch list of cities
  getCities() {
    return this.http.get('assets/cities.json')
  }
}