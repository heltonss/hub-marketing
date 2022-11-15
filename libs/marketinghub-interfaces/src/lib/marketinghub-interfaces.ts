export interface Banner {
  call: string;
  messageDefault: string;
  shortUrl: string
}

export interface Ads {
  title: string,
  image: string,
  from: string,
  to: string,
  detail: string;
}

export interface CreateShortUrl {
  account: string,
  originUrl: string,
}

export interface UrlShortner {
  account: string,
  shortUrl: string
}

export type BannerCreated = Banner & Ads;
