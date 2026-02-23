import { Test, TestingModule } from '@nestjs/testing';
import { QuranService } from './quran.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { QuranVerse } from './entity/quran-verse.entity';
import { QuranChapter } from './entity/quran-chapter.entity';

describe('QuranService', () => {
  let service: QuranService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QuranService,
        {
          provide: getRepositoryToken(QuranVerse),
          useValue: {},
        },
        {
          provide: getRepositoryToken(QuranChapter),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<QuranService>(QuranService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
