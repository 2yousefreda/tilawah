import { Controller, Get, Param } from '@nestjs/common';
import { QuranService } from './quran.service';

@Controller('quran')
export class QuranController {
  constructor(private readonly quranService: QuranService) {}

  @Get(':id')
  getSurah(@Param('id') id: string) {
    return this.quranService.findSurah(id);
  }
}