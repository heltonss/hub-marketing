import { UrlRespone } from './../../interfaces/urlResponse';
import { UrlRequest } from './../../interfaces/urlRequest';
import { Url, UrlDocument } from './../../models/Url.schema';
import CreateUrlShortnerDTO from '../../dto/createUrlShortner';
import { Injectable } from '@nestjs/common';
import { validateUrl } from '../../utils/validate';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ShortenerUrlService {
  constructor(@InjectModel(Url.name) private urlModel: Model<UrlDocument>) { }

  async createShortnerUrl(body: UrlRequest): Promise<UrlRespone> {
    const { account, originUrl } = body;
    const bodyUrlShortner = new CreateUrlShortnerDTO(account, originUrl);

    if (validateUrl(originUrl)) {
      try {
        const createUrl = new this.urlModel(bodyUrlShortner);
        const urlCreated = await createUrl.save();
        return urlCreated;
      } catch (err) {
        console.log(err);
      }
    }
  }

  async findShortUrl(urlId: string) {
    const urlFinded = await this.urlModel.findOneAndUpdate({ urlId }, { $inc: { clicks: 1 } })
    return urlFinded;
  }
}


