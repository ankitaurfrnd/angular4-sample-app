import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  configUrl = 'https://jsonplaceholder.typicode.com/posts';

  getConfig() {
    return this.http.get(this.configUrl);
  }
}