import { Test, TestingModule } from '@nestjs/testing';
import { QuranController } from './quran.controller';
import { QuranService } from './quran.service';

describe('QuranController', () => {
  let controller: QuranController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuranController],
      providers: [
        {
          provide: QuranService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<QuranController>(QuranController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
