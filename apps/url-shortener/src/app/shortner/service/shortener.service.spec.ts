import { Test, TestingModule } from '@nestjs/testing';
import { ShortenerUrlService } from './shortener.service';

describe('ShortenerUrlService', () => {
  let service: ShortenerUrlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortenerUrlService],
    }).compile();

    service = module.get<ShortenerUrlService>(ShortenerUrlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
