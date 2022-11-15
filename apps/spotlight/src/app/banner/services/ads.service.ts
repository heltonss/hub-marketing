import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner, CreateShortUrl } from '@message-hub/marketinghub-interfaces';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private httpClient: HttpClient) { }

  createBanner(url: CreateShortUrl): Observable<unknown> {
    return this.httpClient.post<Banner>(`${environment.url}/advertising`, url)
  }
}
