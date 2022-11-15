import { environment } from './../../../../environments/environment';
import { CreateShortUrl } from '@message-hub/marketinghub-interfaces';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UrlshortnerService {

  constructor(private readonly httpService: HttpService) {}

  createShortnerUrl(urlRequest: CreateShortUrl) {
   return this.httpService.post<unknown>(`${environment.urlApi}/shortner`, urlRequest);
  }
}
