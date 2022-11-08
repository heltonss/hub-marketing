import { nanoid } from "nanoid";
import { environment } from "../../environments/environment";

export default class CreateUrlShortnerDTO {
  private readonly urlId: string;
  private readonly shortUrl: string;

  constructor(private account: string, private originUrl: string) {
    this.account = account;
    this.originUrl = originUrl;
    this.urlId = nanoid(7);
    this.shortUrl = this.createShortUrl();
  }

  private createShortUrl() {
    return `${environment.base}/${this.urlId}`;
  }
}
