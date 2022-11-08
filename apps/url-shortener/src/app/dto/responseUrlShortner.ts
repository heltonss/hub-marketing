import { UrlRespone } from './../interfaces/urlResponse';

export default class ResponseUrlShortner {
  private readonly account: string;
  private readonly shortUrl: string;

  constructor(body: UrlRespone) {
    this.account = body.account;
    this.shortUrl = body.shortUrl;
  }
}
